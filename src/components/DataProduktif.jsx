'use client'

import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { DeleteDataProduktif } from './data-produktif/DeleteDataProduktif';
import moment from 'moment';

export const DataProduktif = ({produktifData}) => {
    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('category.name', {
            cell: (info) => info.getValue(),
            header: 'Kategori'
        }),
        columnHelper.accessor('title', {
            cell: (info) => info.getValue(),
            header: 'Nama Kegiatan'
        }),
        columnHelper.accessor(row => `${row.contributorName}\n${row.contributorEmail}`, {
            id: 'contributor',
            header: 'Kontributor',
            // cell: (info) => (
            //     <div>
            //         <p>{info.getValue()}</p>
            //         <p>{info.getValue()}</p>
            //     </div>
            // )
        }),
        columnHelper.accessor('updateAt', {
            cell: (info) => moment(info.getValue()).format("MMMM Do YYYY: h:mm:ss A"),
            header: 'Tanggal'
        }),
        columnHelper.accessor('opsi', {
            header: 'Opsi',
            cell: ({row}) => (
                <div className='flex gap-2'>
                    <Link href={`/dashboard/data-produktif/edit/${row.original.id}`} className='btn btn-sm btn-warning text-white'><FontAwesomeIcon icon={faPenToSquare}/></Link>
                    <DeleteDataProduktif key={row.id} requestId={row.original.id} requestData={row.original}/>
                </div>
            )
        })
    ]

    const [data, setData] = useState(produktifData);
    const [globalFilter, setGlobalFilter] = useState('');

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        state: {
            globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
        initialState: {
            pagination: {
                pageSize: 5,
            }
        },
        getPaginationRowModel: getPaginationRowModel()
    });

  return (
    <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
                <p>Show</p>
                <select className='select select-md select-bordered' onChange={(e) => table.setPageSize(Number(e.target.value))}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value={data.length}>All</option>
                </select>
                <p>entries</p>
            </div>

            <label className='flex items-center gap-2'>
                <input
                    className='input input-bordered input-md w-60'
                    value={globalFilter ?? ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder='Search'
                />
            </label>

        </div>

        <table className='table bg-white table-zebra table-lg '>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => {
                    return (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <th key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                );
                            })}
                        </tr>
                    )
                })}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => {
                    return (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => {
                                return (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>

        <div className='flex justify-end gap-2'>
            <button className='btn btn-primary' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>{'<'}</button>
            <button className='btn btn-primary' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{'>'}</button>
        </div>
    </div>
  )
}

'use client'

import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import React, { useState } from 'react'
import { UpdateStatusKontribusi } from './pengajuan-kontribusi/UpdateStatusKontribusi';
import moment from 'moment';

export const PengajuanKontribusi = ({requestData}) => {
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
        columnHelper.accessor('kontributor', {
            id: 'contributor',
            header: 'Kontributor',
            cell: ({row}) => (
                <div>
                    <p>{row.original.contributorName}</p>
                    <p>{row.original.contributorEmail}</p>
                </div>
            )
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            cell: ({cell, row}) => {
                return <>
                    {row.original.status === 'Ditolak'
                        ? <p className='text-red-800'>{row.original.status}</p>
                        : <p>{row.original.status}</p>
                    }
                </>
            },
        }),
        columnHelper.accessor('createAt', {
            cell: (info) => moment(info.getValue()).format("MMMM Do YYYY: h:mm:ss A"),
            header: 'Tanggal'
        }),
        columnHelper.accessor('id', {
            header: 'Opsi',
            cell: ({row}) => (
                <UpdateStatusKontribusi key={row.id} requestId={row.original.id} requestData={row.original} />
            )
        })
    ];

    // const [data, setData] = useState(requestData);
    const [globalFilter, setGlobalFilter] = useState('');

    const table = useReactTable({
        data: requestData,
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
                <select aria-label='Pilih Jumlah Data yang akan ditampilkan' className='select select-md select-bordered' onChange={(e) => table.setPageSize(Number(e.target.value))}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value={requestData.length}>All</option>
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
                                    <th className='text-black text-sm' key={header.id}>
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

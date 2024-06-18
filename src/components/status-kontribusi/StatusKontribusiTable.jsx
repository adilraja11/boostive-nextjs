'use client'

import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import React, { useState } from 'react'
import moment from 'moment';

export const StatusKontribusiTable = ({statusKontribusiData}) => {
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
        columnHelper.accessor('status', {
            cell: (info) => info.getValue(),
            header: 'Status'
        }),
        columnHelper.accessor('createAt', {
            cell: (info) => moment(info.getValue()).format("MMMM Do YYYY: h:mm:ss A"),
            header: 'Tanggal'
        }),
    ];

    const [data, setData] = useState(statusKontribusiData);
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
                {statusKontribusiData.length == 0 
                    ? <td>No data available in table</td>
                    : <div></div>
                }
            </tbody>
        </table>

        <div className='flex justify-end gap-2'>
            <button className='btn btn-primary' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>{'<'}</button>
            <button className='btn btn-primary' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{'>'}</button>
        </div>
    </div>
  )
}
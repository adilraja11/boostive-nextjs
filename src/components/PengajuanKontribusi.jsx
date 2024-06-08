'use client'

import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'

export const PengajuanKontribusi = ({requestData}) => {
    const initialData = [
        {
            id: 1,
            kategori: 'SMA',
            activityName: 'Codespark',
            name: 'Adil',
            email: 'rajaadil@gmail.com',
            status: 'Diproses',
            datetime: '10-06-2023 20:44:45'
        },
        {
            id: 2,
            kategori: 'Kuliah',
            activityName: 'ChatGPT',
            name: 'Adil',
            email: 'rajaadil@gmail.com',
            status: 'Ditolak',
            datetime: '10-06-2023 20:44:45'
        },
        {
            id: 3,
            kategori: 'SMA',
            activityName: 'Hackathon',
            name: 'Budi',
            email: 'budibudi@gmail.com',
            status: 'Diproses',
            datetime: '12-06-2023 18:30:00'
        },
        {
            id: 4,
            kategori: 'Kuliah',
            activityName: 'Workshop AI',
            name: 'Citra',
            email: 'citra123@gmail.com',
            status: 'Ditolak',
            datetime: '14-06-2023 09:15:30'
        },
        {
            id: 5,
            kategori: 'SMA',
            activityName: 'Robotics Club',
            name: 'Dewi',
            email: 'dewidewi@gmail.com',
            status: 'Diterima',
            datetime: '15-06-2023 14:50:10'
        },
        {
            id: 6,
            kategori: 'Kuliah',
            activityName: 'Coding Bootcamp',
            name: 'Eko',
            email: 'ekoeko@gmail.com',
            status: 'Diterima',
            datetime: '16-06-2023 12:00:00'
        },
        {
            id: 7,
            kategori: 'SMA',
            activityName: 'Math Olympiad',
            name: 'Fani',
            email: 'fanifani@gmail.com',
            status: 'Ditolak',
            datetime: '18-06-2023 16:45:20'
        },
        {
            id: 8,
            kategori: 'Kuliah',
            activityName: 'Science Fair',
            name: 'Gilang',
            email: 'gilang123@gmail.com',
            status: 'Diterima',
            datetime: '19-06-2023 10:20:30'
        },
        {
            id: 9,
            kategori: 'SMA',
            activityName: 'Art Competition',
            name: 'Hana',
            email: 'hanahana@gmail.com',
            status: 'Diterima',
            datetime: '20-06-2023 08:10:50'
        },
        {
            id: 10,
            kategori: 'Kuliah',
            activityName: 'Startup Pitch',
            name: 'Indra',
            email: 'indra123@gmail.com',
            status: 'Ditolak',
            datetime: '22-06-2023 17:35:40'
        },
        {
            id: 11,
            kategori: 'SMA',
            activityName: 'Physics Olympiad',
            name: 'Joko',
            email: 'jokojoko@gmail.com',
            status: 'Ditolak',
            datetime: '24-06-2023 11:20:10'
        },
        {
            id: 12,
            kategori: 'Kuliah',
            activityName: 'Math Workshop',
            name: 'Kiki',
            email: 'kiki123@gmail.com',
            status: 'Diterima',
            datetime: '25-06-2023 13:50:40'
        },
        {
            id: 13,
            kategori: 'SMA',
            activityName: 'Chemistry Club',
            name: 'Lala',
            email: 'lala123@gmail.com',
            status: 'Diterima',
            datetime: '26-06-2023 15:30:20'
        },
        {
            id: 14,
            kategori: 'Kuliah',
            activityName: 'Robotics Competition',
            name: 'Mimi',
            email: 'mimi123@gmail.com',
            status: 'Ditolak',
            datetime: '27-06-2023 17:10:50'
        },
        {
            id: 15,
            kategori: 'SMA',
            activityName: 'Biology Seminar',
            name: 'Nina',
            email: 'nina123@gmail.com',
            status: 'Ditolak',
            datetime: '28-06-2023 19:45:30'
        },
        {
            id: 16,
            kategori: 'Kuliah',
            activityName: 'Tech Talk',
            name: 'Omar',
            email: 'omar123@gmail.com',
            status: 'Diterima',
            datetime: '29-06-2023 21:20:10'
        },
        {
            id: 17,
            kategori: 'SMA',
            activityName: 'Debate Club',
            name: 'Putu',
            email: 'putu123@gmail.com',
            status: 'Diterima',
            datetime: '30-06-2023 10:15:50'
        },
        {
            id: 18,
            kategori: 'Kuliah',
            activityName: 'Startup Workshop',
            name: 'Qori',
            email: 'qori123@gmail.com',
            status: 'Ditolak',
            datetime: '01-07-2023 12:40:30'
        },
        {
            id: 19,
            kategori: 'SMA',
            activityName: 'Environmental Club',
            name: 'Rina',
            email: 'rina123@gmail.com',
            status: 'Diterima',
            datetime: '02-07-2023 14:10:20'
        },
        {
            id: 20,
            kategori: 'Kuliah',
            activityName: 'Sports Event',
            name: 'Sari',
            email: 'sari123@gmail.com',
            status: 'Diterima',
            datetime: '03-07-2023 16:35:10'
        },
        {
            id: 21,
            kategori: 'SMA',
            activityName: 'Science Camp',
            name: 'Tara',
            email: 'tara123@gmail.com',
            status: 'Ditolak',
            datetime: '04-07-2023 18:50:30'
        },
        {
            id: 22,
            kategori: 'Kuliah',
            activityName: 'Coding Competition',
            name: 'Umar',
            email: 'umar123@gmail.com',
            status: 'Diterima',
            datetime: '05-07-2023 20:30:50'
        },
        {
            id: 23,
            kategori: 'SMA',
            activityName: 'Music Festival',
            name: 'Vina',
            email: 'vina123@gmail.com',
            status: 'Ditolak',
            datetime: '06-07-2023 22:40:10'
        },
        {
            id: 24,
            kategori: 'Kuliah',
            activityName: 'Art Workshop',
            name: 'Wati',
            email: 'wati123@gmail.com',
            status: 'Diterima',
            datetime: '07-07-2023 10:25:30'
        },
    ];

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
        columnHelper.accessor('status', {
            cell: (info) => info.getValue(),
            header: 'Status'
        }),
        columnHelper.accessor('createAt', {
            cell: (info) => info.getValue(),
            header: 'Tanggal'
        }),
        columnHelper.accessor('opsi', {
            header: 'Opsi',
            cell: () => (
                <button className='btn btn-sm btn-primary text-white'><FontAwesomeIcon icon={faPenToSquare}/></button>
            )
        })
    ];

    const [data, setData] = useState(requestData);
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
    <div className='flex flex-col gap-2'>
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

        <table className='table table-zebra table-lg '>
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

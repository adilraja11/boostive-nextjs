'use client'

import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';

export const DataProduktif = () => {
    const initialData = [
        {
            kategori: 'Semua Usia',
            activityName: 'ChatGPT',
            contributorName: 'Jessica',
            contributorEmail: 'jessica@mail.com',
            datetime: '19-05-2024 06:21:08'
        },
        {
            kategori: 'SD',
            activityName: 'Lilchess',
            contributorName: 'Abdul',
            contributorEmail: 'abdul@mail.com',
            datetime: '19-05-2024 06:21:08'
        },
        {
            kategori: 'Orang Tua',
            activityName: 'HSP (Highly Sensitive Person) Test',
            contributorName: 'Fatwa',
            contributorEmail: 'fatwa@mail.com',
            datetime: '19-05-2024 06:21:08'
        },
        {
            kategori: 'SMA',
            activityName: 'Science Olympiad',
            contributorName: 'Budi',
            contributorEmail: 'budi@mail.com',
            datetime: '20-05-2024 07:30:15'
        },
        {
            kategori: 'Kuliah',
            activityName: 'Robotics Workshop',
            contributorName: 'Citra',
            contributorEmail: 'citra@mail.com',
            datetime: '21-05-2024 08:45:30'
        },
        {
            kategori: 'SD',
            activityName: 'Math Quiz',
            contributorName: 'Dewi',
            contributorEmail: 'dewi@mail.com',
            datetime: '22-05-2024 09:50:45'
        },
        {
            kategori: 'Semua Usia',
            activityName: 'Art Exhibition',
            contributorName: 'Eko',
            contributorEmail: 'eko@mail.com',
            datetime: '23-05-2024 10:15:20'
        },
        {
            kategori: 'SMA',
            activityName: 'Debate Competition',
            contributorName: 'Fani',
            contributorEmail: 'fani@mail.com',
            datetime: '24-05-2024 11:30:35'
        },
        {
            kategori: 'Kuliah',
            activityName: 'Startup Pitch',
            contributorName: 'Gilang',
            contributorEmail: 'gilang@mail.com',
            datetime: '25-05-2024 12:45:50'
        },
        {
            kategori: 'Orang Tua',
            activityName: 'Parenting Workshop',
            contributorName: 'Hana',
            contributorEmail: 'hana@mail.com',
            datetime: '26-05-2024 13:50:05'
        },
        {
            kategori: 'SD',
            activityName: 'Science Fair',
            contributorName: 'Indra',
            contributorEmail: 'indra@mail.com',
            datetime: '27-05-2024 14:55:20'
        },
        {
            kategori: 'Semua Usia',
            activityName: 'Music Festival',
            contributorName: 'Joko',
            contributorEmail: 'joko@mail.com',
            datetime: '28-05-2024 15:00:35'
        },
        {
            kategori: 'SMA',
            activityName: 'Coding Bootcamp',
            contributorName: 'Kiki',
            contributorEmail: 'kiki@mail.com',
            datetime: '29-05-2024 16:15:50'
        },
        {
            kategori: 'Kuliah',
            activityName: 'AI Seminar',
            contributorName: 'Lala',
            contributorEmail: 'lala@mail.com',
            datetime: '30-05-2024 17:30:05'
        },
        {
            kategori: 'SD',
            activityName: 'Robotics Contest',
            contributorName: 'Mimi',
            contributorEmail: 'mimi@mail.com',
            datetime: '31-05-2024 18:45:20'
        },
        {
            kategori: 'Semua Usia',
            activityName: 'Environmental Awareness Campaign',
            contributorName: 'Nina',
            contributorEmail: 'nina@mail.com',
            datetime: '01-06-2024 19:50:35'
        },
        {
            kategori: 'Orang Tua',
            activityName: 'Financial Planning Seminar',
            contributorName: 'Omar',
            contributorEmail: 'omar@mail.com',
            datetime: '02-06-2024 20:55:50'
        },
        {
            kategori: 'SMA',
            activityName: 'Physics Olympiad',
            contributorName: 'Putu',
            contributorEmail: 'putu@mail.com',
            datetime: '03-06-2024 21:10:05'
        },
        {
            kategori: 'Kuliah',
            activityName: 'Business Plan Competition',
            contributorName: 'Qori',
            contributorEmail: 'qori@mail.com',
            datetime: '04-06-2024 22:15:20'
        },
        {
            kategori: 'SD',
            activityName: 'Spelling Bee',
            contributorName: 'Rina',
            contributorEmail: 'rina@mail.com',
            datetime: '05-06-2024 23:20:35'
        },
        {
            kategori: 'Semua Usia',
            activityName: 'Tech Expo',
            contributorName: 'Sari',
            contributorEmail: 'sari@mail.com',
            datetime: '06-06-2024 08:25:50'
        },
        {
            kategori: 'Orang Tua',
            activityName: 'Health and Wellness Seminar',
            contributorName: 'Tara',
            contributorEmail: 'tara@mail.com',
            datetime: '07-06-2024 09:30:05'
        },
        {
            kategori: 'SMA',
            activityName: 'Math Olympiad',
            contributorName: 'Umar',
            contributorEmail: 'umar@mail.com',
            datetime: '08-06-2024 10:35:20'
        },
        {
            kategori: 'Kuliah',
            activityName: 'Chemistry Workshop',
            contributorName: 'Vina',
            contributorEmail: 'vina@mail.com',
            datetime: '09-06-2024 11:40:35'
        },
        {
            kategori: 'SD',
            activityName: 'Reading Contest',
            contributorName: 'Wati',
            contributorEmail: 'wati@mail.com',
            datetime: '10-06-2024 12:45:50'
        }
    ];

    const columnHelper = createColumnHelper();

    const columns = [
        columnHelper.accessor('kategori', {
            cell: (info) => info.getValue(),
            header: 'Kategori'
        }),
        columnHelper.accessor('activityName', {
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
        columnHelper.accessor('datetime', {
            cell: (info) => info.getValue(),
            header: 'Tanggal'
        }),
        columnHelper.accessor('opsi', {
            header: 'Opsi',
            cell: () => (
                <div className='flex gap-2'>
                    <button className='btn btn-sm btn-warning text-white'><FontAwesomeIcon icon={faPenToSquare}/></button>
                    <button className='btn btn-sm btn-error text-white'><FontAwesomeIcon icon={faTrashCan}/></button>
                </div>
            )
        })
    ]

    const [data, setData] = useState(initialData);
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

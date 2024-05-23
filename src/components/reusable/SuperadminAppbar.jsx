import React from 'react'

export const SuperadminAppbar = () => {
  return (
    <nav className="navbar bg-white border-solid border-2 border-gray-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label htmlFor="my-drawer" className="drawer-button">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                </label>
            </div>
        </div>
        <div className="navbar-end">
            <ul className="menu menu-horizontal px-1">
                <li>
                <details>
                    <summary>
                        Superadmin
                    </summary>
                    <ul className="p-2 bg-base-100 rounded-t-none">
                        <li><a>Profil</a></li>
                        <li><a>Keluar</a></li>
                    </ul>
                </details>
                </li>
            </ul>
        </div>
    </nav>
  )
}

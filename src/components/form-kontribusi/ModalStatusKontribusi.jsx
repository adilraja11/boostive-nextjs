import React from 'react'

export const ModalStatusKontribusi = () => {
  return (
    <>
        <dialog id="check_status_kontribusi" className="modal">
            <div className="flex flex-col modal-box gap-4">
                <h3 className="font-bold text-lg">Periksa Status Kontribusi</h3>
                <div className="flex flex-col gap-2">
                    <label>Nama Anda</label>
                    <input placeholder="Masukkan Nama Anda"></input>
                </div>
                <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input placeholder="name@gmail.com"></input>
                </div>
                <div className="modal-action">
                    <form method="dialog" className="flex gap-3">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Batal</button>
                        <button className="btn btn-primary">Periksa</button>
                    </form>
                </div>
            </div>
        </dialog>
    </>
  )
}

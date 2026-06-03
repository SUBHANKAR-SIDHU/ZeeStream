import React from 'react'

function Dropdown({ title, func, options }) {
    return (
        <div className="flex relative flex-col max-w-52 w-full text-sm">
            <select defaultValue="0" onChange={func} className="peer group flex items-center justify-between w-full text-left px-2 py-2 border rounded bg-zinc-800 text-zinc-100 border-gray-600 shadow-sm focus:outline-none">
                    <option value="0" disabled>{title}</option>
                {options.map((p, i) => (
                    <option key={i} value={p} className="px-2 py-2 flex font-semibold text-zinc-300 items-center gap-2 hover:bg-indigo-500 hover:text-white cursor-pointer" >
                        {p.toUpperCase()}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown

'use client'

import React, { useState } from 'react'
import Image from "next/image";

export function UploadForm() {
    const [file, setFile] = useState<File>()
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!file) return

        try {
            const data = new FormData()
            data.set('file', file)
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: data
            })
            if (!res.ok) throw new Error(await res.text())
        } catch (e: any) {
            console.error(e)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Image src="/ui_ux.png" alt="image" width={100} height={100}/>
            <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files?.[0])}
            />
            <input type="submit" value="Upload" />
        </form>
    )
}
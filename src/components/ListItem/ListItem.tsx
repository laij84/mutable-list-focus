import React, { useEffect, useRef } from 'react'

interface ListItemProps {
    handleDelete: (text: string) => void
    text: string
}

export const ListItem: React.FC<ListItemProps> = ({ handleDelete, text }) => {
    const ref = useRef<HTMLLIElement>(null)

    useEffect(() => {
        const item = ref.current

        return () => {
            switch (true) {
                case !!item?.nextElementSibling:
                    ;(item?.nextElementSibling as HTMLLIElement).focus()
                    break
                case !!item?.previousElementSibling:
                    ;(item?.previousElementSibling as HTMLLIElement).focus()
                    break
                default:
                    ;(item?.parentElement as HTMLOListElement).focus()
                    break
            }
        }
    }, [])

    return (
        <li ref={ref} tabIndex={-1}>
            {text} <button onClick={() => handleDelete(text)}>Delete</button>
        </li>
    )
}

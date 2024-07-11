import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/16/solid';

export default function TableHeading({sort_field, sort_direction, name, sortChanged, children}) {
    return (
        <th onClick={e => sortChanged(name)}>
            <div className="px-3 py-3 flex items-center justify-between gap-1 cursor-pointer">
                {children}
                <div>
                    <ChevronUpIcon className={"w-4 " + (sort_field === name && sort_direction === "asc" ? "text-white" : "")} />
                    <ChevronDownIcon className={"w-4 -mt-2 " + (sort_field === name && sort_direction === "desc" ? "text-white" : "")} />
                </div>
            </div>
        </th>
    )
}
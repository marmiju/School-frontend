import Link from "next/link"
import { Button } from "../button/Button"

interface highlightProps{
    title?:string,
    class?:string,
    semester?:string
    date?:Date,
    link:string
}

const LatestHeilights = ({data,title}:{data:highlightProps,title:string}) => {
    return (
        <div>
            <p className="text-background bg-primary p-2">{title}</p>
            {
                data && <div className="flex  bg-secondary  items-center p-4 justify-between text-text">
                    <p className="w-96 line-clamp-1">{data!.title || data.class}</p>
                    <p>{data.semester ? data.semester : data.date?.toString()}</p>
                    <Link href={data?.link} target="_blank">view</Link>
                </div>
            }
            <Button link="/notice" className="">সব গুলো দেখুন</Button>
        </div>
    )
}

export default LatestHeilights

import BookList from "@/lib/academic/BookList";
import { GrView } from "react-icons/gr";
import Hero from "../components/hero/Hero";

const Page = () => {
    const bookList = BookList();

    return (
        <>
    
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Hero title="Notice"/>
           
            <table className="w-full border-collapse border border-secondary">
                <thead>
                    <tr className="bg-secondary text-primary text-center">
                        <th className="p-2 border">Class</th>
                        <th className="p-2 border">Session</th>
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookList.map((book, index) => (
                        <tr
                            key={index}
                            className="text-center border-b text-text border-secondary hover:bg-secondary"
                        >
                            <td className="p-2 border">{book.class}</td>
                            <td className="p-2 border">{book.session}</td>
                            <td className="p-2 border">{book.date}</td>
                            <td className="p-2 border">

                                <a
                                    href={book.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    View
                                </a>


                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
            </>
    );
};

export default Page;

import Hero from "../components/hero/Hero";
import FetchResult from "@/lib/result/FetchResult";

const Page = async () => {
    const Results = await FetchResult()
 

    return (
        <>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Hero title="রেজাল্ট/ফলাফল" />

                <table className="w-full border-collapse border border-secondary">
                    <thead>
                        <tr className="bg-secondary text-primary text-center">
                            <th className="p-2 border">ক্লাস</th>
                            <th className="p-2 border">সেকশন</th>
                            <th className="p-2 border">সেমিসটার</th>
                            <th className="p-2 border">একশন</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Results!.map((result) => (
                            <tr
                                key={result.id}
                                className="text-center border-b text-text border-secondary hover:bg-secondary"
                            >
                                <td className="p-2 border">{result.class}</td>
                                <td className="p-2 border">{result.section}</td>
                                <td className="p-2 border">{result.semester}</td>
                                <td className="p-2 border">

                                    <a
                                        href={result.link}
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

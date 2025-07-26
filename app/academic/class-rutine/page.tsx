import ClassRutine from "@/lib/academic/ClassRutine";

const RutinePage = () => {
    const classRutine = ClassRutine();

    return (
        <>
            <div>
                <h1 className="text-3xl font-bold text-primary text-center my-6">পরীক্ষার রুটিন</h1>
            </div>

            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <table className="w-full border-collapse border border-secondary">
                    <thead>
                        <tr className="bg-secondary text-primary text-center">
                            <th className="p-2 border">ক্লাস</th>
                            <th className="p-2 border">শাখা/ বিভাগ</th>
                            <th className="p-2 border">একস</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classRutine.map((exam, index) => (
                            <tr
                                key={index}
                                className="text-center border-b text-text border-secondary hover:bg-secondary"
                            >
                                <td className="p-2 border">{exam.class}</td>
                                <td className="p-2 border">{exam.group ?? 'নেই'}</td>
                                <td className="p-2 border">

                                    <a
                                        href={typeof exam.url === 'string' ? exam.url : URL.createObjectURL(exam.url)}
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

export default RutinePage;

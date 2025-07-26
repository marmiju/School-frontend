import StudentList from "@/lib/academic/StudentList";

const StudentPage = () => {
    const studentList = StudentList();

    return (
        <>
        <div>
            <h1 className="text-3xl font-bold text-center my-6">Student List</h1>
        </div>
    
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
           
            <table className="w-full border-collapse border border-secondary">
                <thead>
                    <tr className="bg-secondary text-primary text-center">
                        <th className="p-2 border ">Class</th>
                        <th className="p-2 border">Session</th>
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student, index) => (
                        <tr
                            key={index}
                            className="text-center border-b text-text border-secondary hover:bg-secondary"
                        >
                            <td className="p-2 border">{student.class}</td>
                            <td className="p-2 border">{student.session}</td>
                            <td className="p-2 border">{student.date}</td>
                            <td className="p-2 border">

                                <a
                                    href={student.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
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

export default StudentPage;

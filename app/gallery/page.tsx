import FetchGallery from "@/lib/gellery/FetchGallery";
import Hero from "../components/hero/Hero";
import Image from "next/image";



const Page = async () => {
    const gallery = await FetchGallery()
    console.log("Gallery", gallery)
    return (
        <>
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Hero title="গ্যালারী" />
                <div className="flex flex-wrap justify-center gap-4">
                    {
                        gallery && gallery.map(media => (
                            <div className="bg-secondary" key={media.id}>
                                {media.type === 'image' ? (
                                    <div className="border border-white w-64 md:w-96 h-64  relative flex justify-center">
                                        <Image
                                            className="object-cover"
                                            fill
                                            src={media.url}
                                            alt={media.title}
                                            sizes="300px"
                                        />
                                    </div>
                                ) : (
                                        <iframe
                                        className="md:w-[1280px] h-[600px]"
                                        src="https://www.youtube.com/embed/pkq-WvR-MVo?list=RDwcACMOlC6iY"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                  

                                )}
                                <h3 className="text-text p-4 font-semibold">{media.title}</h3>

                            </div>
                        ))

                    }
                </div>

            </div>
        </>
    );
};

export default Page;

interface GalleryItem {
    id: string,
    type: 'image' | 'video';
    title: string;
    url: string;
}





const baseurl = process.env.Url || 'http://localhost:3000'


export default async function FetchGallery() {

    try {
        const res = await fetch(`${baseurl}/data/gallery.json`)

        const result: GalleryItem[] = await res.json() || []
        return result

    } catch (error) {
        console.log(error)
        new Error('Something went wrong!')
    }

} 
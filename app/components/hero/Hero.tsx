const Hero = ({title}:{title:string}) => {
    return (
        <p className="my-2 py-20 col-span-12 border text-center text-4xl font-bold text-background rounded-sm bg-primary">
            {title}
        </p>
    )
}

export default Hero;
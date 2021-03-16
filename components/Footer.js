const Footer = () => {
    return (
        <div className="mx-auto bg-gray-100 text-center lg:text-left pt-0 pt-10">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-1 py-4">
                    <div className="col-span-2 lg:text-left">
                        <div className="font-bold text-1xl">NextJS with TailwindCSS</div>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quibusdam facilis totam debitis repudiandae quos ipsa numquam excepturi officiis impedit, aperiam tempore autem error voluptates molestias laborum alias similique ad.</p>
                    </div>
                    <div className="lg:text-left">
                        <div className="font-bold text-1xl">Contact </div>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore dignissimos, quibusdam natus alias eius quaerat consectetur fugiat. Mollitia ex aut molestias officia asperiores placeat, laboriosam, illo aliquam inventore eaque magnam.</p>
                    </div>
                </div>
                <hr/>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 py-1 ">
                    <div className="col-span-2 lg:text-left">
                        <div className="font-bold">
                            <a href="https://www.linkedin.com/in/rian-ardiana-prapanca-7a085018a/" className="text-blue-700 text-sm">LinkedIn Rian Ardiana Prapanca</a>
                        </div>

                    </div>
                    <div className="lg:text-left">
                        <div className="grid grid-cols-3">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
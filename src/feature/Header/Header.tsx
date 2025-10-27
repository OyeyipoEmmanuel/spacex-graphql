const headerCardData = [
    {
        head: "200+",
        val: "Total Launches"
    },
    {
        head: "95%+",
        val: "Success Rate"
    },
    {
        head: "5+",
        val: "Rocket Types"
    },
]

const Header = () => {
    const bgUrl = "https://images.unsplash.com/photo-1699541948287-9c8ce85624ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZXglMjByb2NrZXQlMjBsYXVuY2glMjBuaWdodHxlbnwxfHx8fDE3NjE1MjIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"

    return (
        <header className='relative min-h-[100vh]' style={{}}>
            <section className='absolute inset-0 min-h-screen'>
                <div className="absolute inset-0 h-full">
                    <img
                        src={bgUrl}
                        alt="space-x-universe"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 to-transparent"></div>
                </div>

                  <section className="relative z-10 flex flex-col justify-center px-6 md:px-16 py-32">
                    <div className='text-[#4894E8] font-light px-3 py-1 rounded-full border border-[#143268] bg-[#112246] max-w-fit'>
                        <p>Built this cause I'm bored.</p>
                    </div>

                    <div className='text-white mt-8 md:w-[70%] lg:w-[60%]'>
                        <h1 className='text-5xl text-[#B0DCEB] mb-6 font-semibold md:text-6xl lg:text-7xl '>Explore SpaceX Launches</h1>
                        <p className='text-[#788296] text-[15px]'>Discover the complete history of SpaceX missions. From Falcon 1 to Starship, explore every launch, rocket, and mission that's shaping the future of space exploration.</p>
                    </div>

                    <div className='grid grid-cols-2 gap-6 mt-8 md:grid-cols-3 lg:w-[50%] lg:gap-2'>
                        {headerCardData.map((data, index) => (
                            <div key={index} className="bg-[#0C142B] border border-[#142957] px-5 py-2 flex flex-col space-y-0.5 rounded-lg shadow-lg">
                                <p className="text-[#346DAC] text-2xl">{data.head}</p>
                                <p className="text-[#788296]">{data.val}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </section>


        </header>
    )
}

export default Header
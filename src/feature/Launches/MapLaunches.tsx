import { useQuery } from "@apollo/client/react"
import { GET_LAUNCHES } from "../../api/getDatas"
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";


type Launch = {
    mission_name: string;
    rocket: { rocket_name: string };
    launch_success: boolean;
    launch_date_utc: string;
};

type LaunchesData = {
    launchesPast: Launch[];
};

const MapLaunches = () => {
    const { loading, error, data } = useQuery<LaunchesData>(GET_LAUNCHES, {
        variables: { limit: 35 }
    })
    console.log(data);

    // To load more on scroll
    // const loadMore = () => {
    //     fetchMore({
    //         variables: { offset: data?.launchesPast.length || 0 },
    //         updateQuery: (prev, { fetchMoreResult }) => {
    //             if (!fetchMoreResult) return prev

    //             return {
    //                 launchesPast: [
    //                     ...prev.launchesPast,
    //                     ...fetchMoreResult.launchesPast
    //                 ]
    //             }
    //         }
    //     })
    // }


    return (
        <main className="min-h-screen">
            <section className="mb-8">
                <h2 className="text-2xl text-white">Recent Launches</h2>
                <p className="text-gray-400 md:text-lg">Showing {!loading && !error && data && data?.launchesPast.length || 0} launches</p>
            </section>

            <section
                className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 "
            // onScroll={(e) => {
            //     const target = e.target as HTMLDivElement;
            //     const bottom = target.scrollHeight - target.scrollTop <= target.clientHeight + 100;
            //     if (bottom && !loading) loadMore()
            // }}
            >
                {loading && <p className="text-5xl text-white">Loading...</p>}
                {error && <p>{error?.message}</p>}
                {!loading && !error && data && data.launchesPast.map((each, index) => (
                    <section className="bg-[#080E21] p-3 rounded-2xl border border-[#10234F] hover:bg-[#092B43] hover:transition-all hover:duration-300" key={index}>
                        <div className="flex items-center space-x-5">
                            <aside className="bg-[#092F53] rounded-lg p-3">
                                <HiOutlineRocketLaunch className="text-2xl text-[#4DA2FD]" />
                            </aside>

                            <span className="flex flex-col space-y-1">
                                <h1 className="text-white text-xl">{each.mission_name}</h1>

                                <span className="flex space-x-2 items-center">
                                    <HiOutlineRocketLaunch className="text-sm text-gray-400" />
                                    <p className="text-gray-400">{each.rocket.rocket_name}</p>
                                </span>

                            </span>

                            <span>{each.launch_success}</span>

                        </div>

                        <div className="flex space-x-3 bg-[#0F1A2E] border border-[#1E3247] mt-8 p-3 rounded-xl">
                            <CiCalendar className="text-[#01D0F2] text-xl" />
                            <p className="text-white">{each.launch_date_utc}</p>
                        </div>
                    </section>
                ))}
            </section>
        </main>
    )
}

export default MapLaunches
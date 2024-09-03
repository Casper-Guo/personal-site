import Image from 'next/image';
import Link from 'next/link';
import Icon from './icon';

export default function ProjectSection({ left, data }) {
    return (<section className="container mx-auto px-2 py-10 relative">

        <div className={`lg:w-10/12 relative ${left ? 'ml-auto' : 'mr-auto'}`}>
            <DesktopImage image={data?.desktopImage} name={data?.name} />
        </div>
        <div className={`${data?.desktopImage ? 'lg:absolute lg:rounded-t-lg lg:-translate-y-1/2 top-1/2 lg:w-5/12' : 'rounded-t-lg'} bg-slate-400  dark:bg-slate-600 drop-shadow p-4 rounded-b-lg w-full  ${left ? 'left-0' : 'right-0'}`} >
            <div className='flex text-3xl bold justify-between items-center mb-2'>
                <h2 className=''>{data.name}</h2>
                <div className='flex gap-2'>
                    {data.github && <Link className='' href={data.github} target='_blank'>
                        <Icon name="github" />
                    </Link>}
                    {data.link && <Link className='' href={data.link} target='_blank'>
                        <Icon name="open" />
                    </Link>}
                </div>


            </div>
            {
                data?.icons && <div className='flex flex-wrap text-2xl items-center gap-2 mb-2'>
                    {data?.icons.map((icon) => (
                        <div className="tooltip tooltip-bottom" key={icon} data-tip={icon}>
                            <Icon name={icon} />
                        </div>

                    ))}
                </div>
            }

            <p>
                {data.description}
            </p>
        </div>
    </section>)
}

function DesktopImage({ name, image }) {
    if (name && image) {
        return (
            <div className="mockup-window dark:bg-base-300 bg-base-100 w-full lg:rounded-b-lg rounded-b-none">
                <Image
                    className=""
                    width={1920}
                    height={1080}
                    src={image}
                    alt={name + " desktop view"}
                />
            </div>
        )
    } else {
        return null
    }
}

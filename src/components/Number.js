

const Number = ({item}) => {
    const {image, h1, note} = item
    return (
        <div className="flex w-full md:w-[31%] items-start gap-5">
            <img src={image} alt='one' />
            <div className=''>
                <p className='font-black text-xl md:text-3xl mb-3'>{h1}</p>
                <p className='lg:text-lg text-[#ffffff8d] '>{note} </p>
            </div>
        </div>
    )
}

export default Number
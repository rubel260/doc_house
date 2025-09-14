import serviceImg from '../../../assets/docimage/banner.jpg'
import serviceImg2 from '../../../assets/docimage/cover.png'

const OurService = () => {
    return (
        <div className='bg-gray-200 py-6 px-42'>
            <div className='flex '>
                <div className='flex-1'>
                    <img className='h-150 rounded' src={serviceImg} alt="" />

                </div>
                <div className='flex-1 space-y-3'>
                    <h1 className='text-4xl font-bold'>Our Service</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                   <div className="join text-2xl">
  <input className="join-item btn" type="radio" name="options" aria-label="crebity protection" />
  <input className="join-item btn" type="radio" name="options" aria-label="oral" />
  <input className="join-item btn" type="radio" name="options" aria-label="teath propblem" />
                    </div>

                    <img className='h-60 w-full rounded-md' src={serviceImg2} alt="" />

                    <p>Todo: daynamic service shown here</p>

                </div>
            </div>
           
        </div>
    );
};

export default OurService;
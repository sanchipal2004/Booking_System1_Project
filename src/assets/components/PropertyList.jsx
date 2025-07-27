import React from 'react'
import useFetch from '../../hooks/useFetch'

const PropertyList = () => {
  const {data,loading,error}= useFetch("api/Hotels/countByType");
  

  const images = [
    "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
    "https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
    "https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
    "https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
    "https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
"https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=",
"https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&o= " 
 ];
  return (
    <div>
      <div className="propertyl flex p-5 mx-24 m-5  w-auto ">{loading ?( "loading please wait"):(<>
    {data && images.map((img,i) =>(
        <div className="propertylItems h-max object-cover  w-96 p-1 m-5">
          <img className='rounded-md border border-cyan-800 cursor-pointer 'src={img} alt="" />
          <div className="propertylTitles text-xl p-1 m-2">
            <h1 className='text-2xl font-medium '>{data[i]?.type}</h1>
            <h1 className='text-slate-400 '>{data[i]?.count} {data[i]?.type}</h1>
          </div>
          </div>
          
          ))}

      </>
    )}
    </div>
    </div>
  );
};

export default PropertyList


function Hero2({yes , hero22 ,hero3 ,hero4}) {
  return (
    <div className="flex items-center container justify-between h-[600px] ">
      <img src={yes} alt="image" />

      <div>
        <h2 className="text-[#0B132A] text-[35px] font-[500]">{hero22}</h2>

        <p className="text-[#4F5665] mt-[22px] mb-[7px] text-[16px] font-[400] w-[427px]">{hero3}</p>

        <p className="text-[#4F5665] text-[14px] mt-[15px] font-[400] flex items-center gap-[10px]"><img src={yes} alt="icon" />{hero4}</p>

        <p className="text-[#4F5665] text-[14px] mt-[15px] font-[400] flex items-center gap-[10px]"><img src={yes} alt="icon" />{hero4}</p>

        <p className="text-[#4F5665] text-[14px] mt-[15px] font-[400] flex items-center gap-[10px]"><img src={yes} alt="icon" />{hero4}</p>

        <p className="text-[#4F5665] text-[14px] mt-[15px] font-[400] flex items-center gap-[10px]"><img src={yes} alt="icon" />{hero4}</p>
      </div>
    </div>
  )
}

export default Hero2
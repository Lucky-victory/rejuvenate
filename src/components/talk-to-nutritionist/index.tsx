import Nutritionist from "@/images/png/nutitionist.png";
import Image from "next/image";

const TalkToNutritionist = () => {
  return (
  <div className="w-full px-4 lg:px-8">
        <section className='w-full flex flex-col-reverse gap-7 lg:flex-row py-20 max-w-[1074px] mx-auto items-center justify-between'>
               <div className="w-full flex flex-col gap-6 lg:max-w-[493px]">
                <p className="text-[#014421] font-bold text-[24px] lg:text-[40px]">TALK TO A NUTRITIONIST</p>
                <p className="text-sm lg:text-base">Elevate your well-being with personalized nutrition guidance,  chat with our top tier professional Nutritionists and embark on a journey to unleash your best self! whether you&apos;re seeking to manage your weight, boost your energy, or simply feel more vibrant, our team of experienced nutritionists is here to provide you with expert advice and support. Explore the power of nutrition in enhancing your health, and let us help you make informed choices that will leave you feeling your absolute best. Start your conversation with a nutritionist today and take that exciting step towards a healthier, more fulfilling life.
                </p>
                <button className="bg-[#014421] h-[48px] w-[163px] lg:h-[59px] font-bold text-base lg:text-[20px] text-[#F5F5DC] rounded-xl">
                    Button
                </button>
            </div>
            <div className="w-full h-[350px] max-w-[471px] lg:h-[474px] relative">
                <Image src={Nutritionist} fill alt="work with us" />
            </div>
       
        </section>
  </div>
  );
};

export default TalkToNutritionist;

function Stats() {

const stats = [

{
title:"10K+",
subtitle:"Students"
},

{
title:"150+",
subtitle:"Countries"
},

{
title:"50+",
subtitle:"Certifications"
},

{
title:"95%",
subtitle:"Success Rate"
}

]

return (

<section className="py-16 bg-white">

<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-8">

{

stats.map((item,index)=>(

<div
key={index}
className="shadow-lg rounded-xl p-8 text-center hover:scale-105 duration-300"
>

<h2 className="text-4xl font-bold text-cyan-500">

{item.title}

</h2>

<p className="mt-3 text-gray-600">

{item.subtitle}

</p>

</div>

))

}

</div>

</section>

)

}

export default Stats
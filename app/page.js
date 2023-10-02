import client from "@/lib/contentfulClient"


const fetchServices = async ()=>{
  const response = await client.getEntries({content_type : "services"})
  const services = response.items.map((item)=>{
    return{
      title: item.fields.title,
      description : item.fields.description,
      image: item.fields.image.fields.file.url
    }
  })
  return services
}
async function Home() {
  const services = await fetchServices();
  console.log("fetchservices ", services)
  return (
    <div>
        <h1>Home Services </h1>
          {
            services.map((service)=>{
              return <>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
                <img src={service.image} alt=""  className="border-rounded"/>
                <hr />
              </>
            })
          }
    </div>
  )
}
export default Home
import '../assets/css/prova.css'
import { Carousel } from "@material-tailwind/react";
 

/* Mettere immagini 2000x800 sennò se vedono na merda me raccomando */
export default function FakeCarousel() {
  return (
    <div className=" h-96 justify-center">
    <Carousel className="rounded-sm h-96 w-full justify-center"> 
      <img
        src="https://cdn.ecommercedns.uk/files/4/211944/6/23137046/2000x800-reynolds.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://wefoundadventure.com/wp-content/uploads/2016/07/P7270396-2000x800.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://assets-au-scc.kc-usercontent.com/330b87ea-148b-3ecf-9857-698f2086fe8d/ea08766e-a930-44c5-8cfc-2a12e5da5514/services_print_2000.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
    </div>
  );
}





'use client';

import { Card } from 'flowbite-react';
import { Button } from 'flowbite-react';

function Tarjetas() {
  return (
<>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center items-center">
<Card
      className="max-w-sm h-sm"
      renderImage={() => <img width={500} height={500} src="interior1.png" alt="" />}
>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Diseños más buscados en 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Descubre los diseños más gustados del año 2021, de mano de nuestra diseñadora Kelly Wearstler
      </p>
      <Button color="dark" pill>
        Saber más
      </Button>
    </Card>
    <Card
      className="max-w-sm h-sm"
      renderImage={() => <img width={500} height={500} src="interior2.png" alt="" />}
>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Diseños más buscados en 2022
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Descubre los diseños más gustados del año 2022, de mano de nuestra diseñadora Kelly Wearstler
      </p>
      <Button color="dark" pill>
        Saber más
      </Button>
    </Card>
    <Card
      className="max-w-sm h-sm"
      renderImage={() => <img width={500} height={500} src="interior3.png" alt="" />}
>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Diseños más buscados en 2023
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
      Descubre los diseños más gustados del año 2023, de mano de nuestra diseñadora Kelly Wearstler
      </p>
      <Button color="dark" pill>
        Saber más
      </Button>
    </Card>
</div>
</>

  );
}

export default Tarjetas;

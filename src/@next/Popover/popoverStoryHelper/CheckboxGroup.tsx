import React, { useState } from 'react';
import { Checkbox } from '../../Checkbox';

type Props = {
  country: string;
  cities: string[];
  onChanged: (action: 'Add' | 'Remove', cities: string[]) => void;
};

export const CheckboxGroup = ({ country, cities, onChanged }: Props) => {
  const [isCountrySelected, setIsCountrySelected] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);

  const handleCountryChanged = (checked: boolean) => {
    setIsCountrySelected(checked);

    if (checked) {
      setSelectedCities(cities);
    } else {
      setSelectedCities([]);
    }

    onChanged(checked ? 'Add' : 'Remove', cities);
  };

  const handleCityChanged = (checked: boolean, id: string) => {
    if (checked && !selectedCities.includes(id)) {
      const selected = [...selectedCities, id];
      setSelectedCities(selected);
      onChanged('Add', [id]);
      return;
    }

    if (!checked) {
      const selected = selectedCities.filter(s => s !== id);
      setSelectedCities(selected);
      onChanged('Remove', [id]);
    }
  };

  return (
    <div key={country}>
      <Checkbox
        id={country}
        label={country}
        checked={isCountrySelected}
        onChange={newChecked => handleCountryChanged(newChecked)}
      />
      {cities.map((city: string) => (
        <div key={`div-${city}`} style={{ marginLeft: '10px' }}>
          <Checkbox
            id={city}
            label={city}
            key={city}
            checked={selectedCities.includes(city) || isCountrySelected}
            onChange={handleCityChanged}
          />
        </div>
      ))}
    </div>
  );
};

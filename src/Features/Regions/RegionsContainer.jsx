import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils';

import MenuList from '../../styles/MenuList';
import MenuItem from '../../styles/MenuItem';
import MenuTitle from '../../styles/MenuTitle';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <>
      <MenuTitle>지역</MenuTitle>
      <MenuList>
        {regions.map((region) => (
          <MenuItem
            key={region.id}
            active={selectedRegion && region.id === selectedRegion.id}
          >
            <button
              type="button"
              onClick={() => handleClick(region.id)}
            >
              {region.name}
              {selectedRegion ? (
                <>
                  {region.id === selectedRegion.id ? '(V)' : null}
                </>
              ) : null}
            </button>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
}

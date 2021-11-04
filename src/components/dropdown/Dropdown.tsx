import React, { Fragment, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { DropdownContainer } from './DropdownStyle';
import AngularIcon from '../../assets/images/angular.png';
import ReactjsIcon from '../../assets/images/reactjs.png';
import VuejsIcon from '../../assets/images/vuejs.png';

// interface OptionI {}

interface DropdownI {
  options: string[];
  addClasses?: string;
  defaultValue: string;
}

const Dropdown: React.FC<DropdownI> = ({
  options,
  addClasses,
  defaultValue,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(defaultValue);
  const images: { [key: string]: string } = {
    angular: AngularIcon,
    reactjs: ReactjsIcon,
    vuejs: VuejsIcon,
  };

  const toggleDropdown = () => setDropdownOpen((curr) => !curr);

  const onSelectHandler = (option: string) => {
    setDropdownValue(option);
    setDropdownOpen(false);
  };
  return (
    <DropdownContainer
      className={[addClasses, dropdownOpen ? 'opened' : ''].join(' ')}
    >
      {options?.length > 0 && (
        <div
          className={['dropdown-options', dropdownOpen ? 'visible' : ''].join(
            ' '
          )}
        >
          {options.map((option: string, index) => (
            <div key={index} className="dropdown-option">
              <input
                type="radio"
                defaultChecked={option === defaultValue}
                defaultValue={option}
                id={option.replaceAll(' ', '')}
                name={'filter'}
              />
              <label
                onClick={() => onSelectHandler(option)}
                htmlFor={option.replaceAll(' ', '')}
              >
                <span>
                  <img src={images[option]} alt="" />
                </span>
                {option}
              </label>
            </div>
          ))}
        </div>
      )}

      <div className="value-selected" onClick={toggleDropdown}>
        {options?.length > 0 ? (
          <Fragment>
            <span className="dropdown-value">{dropdownValue}</span>
            <BsChevronDown color={'#2e2e2e'} />
          </Fragment>
        ) : (
          'No Data'
        )}
      </div>
    </DropdownContainer>
  );
};

export default Dropdown;

import React, { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { imageGet } from './actions';
import saga from './saga';
import reducer from './reducer';
import { imageSelector } from './selector';
import debounce from 'lodash.debounce';

const key = 'image';

function WelcomePage() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  const image = useSelector(imageSelector());

  const handleClick = () => {
    dispatch(imageGet(value));
  };

  const handleChange = (e) => {
    setValue(e.target.value);

    //dispatch(imageGet(e.target.value));
    debounceRequest(e.target.value);
  };
  const sendRequest = (value) => dispatch(imageGet(value));

  const debounceRequest = useCallback(debounce(sendRequest, 500), [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Welcome - React Boilerplate</title>
      </Helmet>
      <main>
        <input
          type="text"
          onChange={handleChange}
          value={value}
          placeholder="Type something"
        />
        {/* <button onClick={handleClick}>Click me!</button> */}
        {image && <img src={image} alt="random image will be here" />}
      </main>
    </div>
  );
}

export default WelcomePage;

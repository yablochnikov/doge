import Button from '../../components/general/ui/button/Button';
import useWindowSize from '../../components/hooks/useWindowSize';
import './style.scss';
import { useEffect, useState } from 'react';

export default function Root() {
  const { width } = useWindowSize();

  const [trempeng, setTrempeng] = useState({
    position: 'absolute',
    top: '10vh',
    left: '5vw',
  });
  const [buyNow, setBuyNow] = useState({
    position: 'absolute',
    top: '10vh',
    right: '5vw',
  });
  const [twitter, setTwitter] = useState({
    position: 'absolute',
    bottom: '10vh',
    left: '5vw',
  });
  const [telegram, setTelegram] = useState({
    position: 'absolute',
    bottom: '10vh',
    right: '5vw',
  });

  useEffect(() => {
    if (width > 768) {
      setTrempeng({ position: 'absolute', top: '10vh', left: '5vw' });
      setBuyNow({ position: 'absolute', top: '10vh', right: '5vw' });
      setTwitter({ position: 'absolute', bottom: '10vh', left: '5vw' });
      setTelegram({ position: 'absolute', bottom: '10vh', right: '5vw' });
    } else {
      setTrempeng({ position: 'absolute', top: '116px', left: '5vw' });
      setBuyNow({ position: 'absolute', top: '116px', right: '5vw' });
      setTwitter({ position: 'absolute', top: '180px', left: '5vw' });
      setTelegram({ position: 'absolute', top: '180px', right: '5vw' });
    }
  }, [width]);

  return (
    <div className='root-p cen'>
      <div className='cen'>
        <div className='bottom-content'>
          <div className='title'>
            In Based Doge <br /> We Trust
          </div>
          <a
            href='https://solscan.io/token/3vfaqZRL6Qjy8VRodWjXSs2AtRL7KFoByVk6ULvLyC7Z'
            target='_blank'
            className='bottom-text cen'
          >
            <div className='bottom-text-inner'>
              CA: A3eME5CetyZPBoWbRUwY3tSe25S6tb18ba9ZPbWk9eFJ
            </div>
          </a>
        </div>
        <div className='top-content'>
          <Button title='$doge' linkTo='/' style={trempeng} />
          <Button title='buy now' linkTo='/' style={buyNow} />
          <Button
            title='twitter'
            linkTo='https://twitter.com/TREMPENGSOL'
            style={twitter}
          />
          <Button
            title='telegram'
            linkTo='https://t.me/TREMPENG'
            style={telegram}
          />
        </div>
      </div>
    </div>
  );
}

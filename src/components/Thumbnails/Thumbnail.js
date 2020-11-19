/** @jsx jsx */

import { css, jsx } from '@emotion/react';
import PropTypes from 'prop-types';
import React from 'react';
import useDeviceDetect from 'utils/useIsMobile';
import {
  Card,
  CardDescription,
  CardHeader,
  CardType,
  imageStyle,
} from './styles';

import Image from 'components/shared/Image';
import { NEWS } from 'routes';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CardWidth = css`
  width: 18.75rem;
  margin-right: 1.5625rem;
`;

const isHorizontal = css`
  @media (min-width: 1025px) {
    flex-direction: row;
    width: 44rem;
  }

  > header {
    height: auto;

    @media (min-width: 1025px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 50%;
      padding-bottom: 1.5625rem;
    }

    h5 {
      @media (min-width: 1025px) {
        font-size: 1.625rem;
      }
    }
  }

  > figure {
    @media (min-width: 1025px) {
      width: 50%;
    }
  }
`;

const CardHeaderStyleSm = css`
  height: 7.5rem;
`;

const Thumbnail = ({ item, t }) => {
  const { isMobile } = useDeviceDetect();
  const { title, urlToImage, description } = item;
  return (
    <Card css={[CardWidth]}>
      <CardHeader css={CardHeaderStyleSm}>
        {title}
        <CardDescription>{description}</CardDescription>
        <CardType>
          <Link
            className="more-link"
            to={{
              pathname: NEWS,
              state: {
                item: item,
              },
            }}
          >
            {t('more')}
          </Link>
        </CardType>
      </CardHeader>
      <Image css={[imageStyle]} src={urlToImage} />
    </Card>
  );
};

Thumbnail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image_url: PropTypes.string,
  image: PropTypes.string,
  label: PropTypes.object,
  t: PropTypes.func,
  logo_url: PropTypes.string,
};

export default withTranslation('home')(Thumbnail);

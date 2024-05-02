import styled from "styled-components";

// MainBanner
export const App = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #02050E;
    color: white;
    padding: 50px 0;
`;

export const MainBannerContent = styled.div`
    display: flex;
    margin-bottom: 50px;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const TitleBox = styled.div`
    margin-top: 40px;
    // @media (max-width: 1024px) and (min-width: 767px) {
    //     display: grid;
    //     text-align: center;
    //     grid-template-columns: 1fr 1fr;  /* 分配兩列，第一列自適應，第二列自動大小 */
    //     grid-template-areas: "content button";  /* 指定元素位置 */
    // }

    @media (max-width: 767px) {
        margin-top: 0;
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-weight: 700;
    font-size: 62px;
    line-height: 80px;
    white-space: pre-wrap; // 換行，但避免不必要的換行
    word-wrap: break-word; // 於必要時斷字
    color: #FFFFFF;

    @media (max-width: 1024px) and (min-width: 768px) {
        font-size: 48px;
        line-height: 60px;
    }

    @media (max-width: 1024px) {
        padding: 8px 30px;
        font-size: 48px;
        line-height: 40px;
    }
`;

export const SubTitle = styled.div`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #ADB9C7;
    margin: 50px 0;

    @media (max-width: 1024px) {
        font-size: 14px;
        line-height: 28px;
        margin: 30px 0;
    }

    @media (max-width: 1024px) {
        padding: 8px 30px;
    }
`;

export const Button = styled.button`
    display: flex;
    gap: 10px;
    background: #1E50FF;
    border-radius: 16px;
    padding:  10px 40px;
    border: none;
    margin: 0 auto;
`;
export const SwiperContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    .swiper-slide {
        background-color: #272D37;
        text-align: center;
        font-size: 18px;
        position: relative;
        text-align: center;
        border-radius: 16px;
        .item {
            padding: 10px;
            img {
                width: 100%;
            }
        }
    }

    @media (max-width: 1024px) {
        margin-top: 30px;
    }
`;

export const ItemDetail = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 35px;
    display: none;
`;

export const ItemSubTitle = styled.div`
    display: flex;
    margin: 0 20px;
    justify-content: space-between;
`;

export const ItemSpan = styled.span`
    font-family: 'Urbanist';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: #FFFFFF;
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Training = styled.div`
    cursor: pointer;
    padding: 0 20px;
    background: #1E50FF;
    border-radius: 10px;
`;

export const PersonDetail = styled.div`
    display: flex;
    margin: 10px 20px 0 20px;
    justify-content: space-between;
`;

export const ItemType = styled.div`
    font-size: 14px;
    line-height: 24px;
    color: #8F9CA9;
`;

export const CurrentBid = styled.div`
    font-size: 14px;
    line-height: 24px;
    color: #8F9CA9;
`;

export const ItemImg = styled.img`
    max-width: 350px;
    max-height: 400px;
    display: block;
    margin: 0 auto;
    border-radius: 16px;
    cursor: pointer;
`;

// MiniBanner
export const MiniBannerContent = styled.div`
    margin: 150px 0;
    display: flex;
    .item {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;

        img {
            flex: 1 1 20%;
            max-width: 20%;
            padding: 10px;
            box-sizing: border-box;
        }
    }

    @media (max-width: 1024px) {
        .item img {
            flex: 1 1 33.33%;
            max-width: 33.33%;
        }
    }

    @media (max-width: 768px) {
        .item img {
            flex: 1 1 50%;
            max-width: 50%;
        }
    }
`;

// createAndSell
export const CreateAndSellContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CreateAndSellTitle = styled.div`
    width: 500px;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    text-align: center;
    text-transform: capitalize;
    color: #FFFFFF;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const CreateAndSellCartItem = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    margin: 100px 0;
    gap:15px;
    @media (max-width: 1024px){
        justify-content: center;
    }
    @media (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    }
`;

export const CreateAndSellItem = styled.div`
    background: #272D37;
    border-radius: 16px;
    width: 33%;
    height: auto;
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-bottom: 30px;
    }
    &:hover {
        cursor: pointer;
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
                    -4px -4px 6px 0 rgba(116, 125, 136, .5), 
                    inset -4px -4px 6px 0 rgba(255,255,255,.2),
                    inset 4px 4px 6px 0 rgba(0, 0, 0, .4);
    }
    @media (max-width: 768px) {
        width: 80%
    }
`;

export const CreateAndSellItemSubTitle = styled.div`
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    text-transform: capitalize;
    color: #FFFFFF;
`;

export const CreateAndSellItemContent = styled.div`
    width: 260px;
    height: auto;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #ADB9C7;
`;

// liveAuctions
export const LiveAuctionsContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const LiveAuctionsContentTitleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button {
        color: #FFFFFF;
        padding: 10px 40px;
        opacity : 1;
        border: 1px solid #1E50FF;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0);
        &:hover {
            background: #1E50FF;
        }
    }
`;

export const LiveAuctionsContentTitle = styled.div`
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    text-transform: capitalize;
    color: #FFFFFF;
`;

export const LiveAuctionsContentButton = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const LiveAuctionsContentCardItem = styled.div`
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap:20px;
    @media (max-width: 684px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const LiveAuctionsContentCard = styled.div`
    width: 28%;
    padding: 5px;
    background-color: #272D37;
    text-align: center;
    font-size: 18px;
    position: relative;
    text-align: center;
    border-radius: 16px;
    img {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        border-radius: 16px;
        cursor: pointer;
    }
    @media (max-width: 684px) {
        width: 90%;
    }
`;

export const LiveAuctionsContentItemDetail = styled.div`
    display: flex;
    flex-direction: column;
    margin: 35px 20px 0 20px; 
`;

export const LiveAuctionsContentSubTitle = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        font-family: 'Urbanist';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        cursor: pointer;
        color: #FFFFFF;
        width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const LiveAuctionsContentTraining = styled.div`
    cursor: pointer;
    padding: 0 20px;
    background: #1E50FF;
    border-radius: 10px;
`;

export const LiveAuctionsContentPersonDetail = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    .type {
        font-size: 14px;
        line-height: 24px;
        color: #8F9CA9;
      } 
`;

export const LiveAuctionsContentCurrent = styled.div`
    .currentBid {
        font-size: 14px;
        line-height: 24px;
        color: #8F9CA9;
    }
`;

// featuredArtist
export const FeaturedArtistContent = styled.div`
    margin: 100px 0;
`;

export const FeaturedArtistTitleBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
`;

export const FeaturedArtistTitle = styled.div`
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    text-transform: capitalize;
    color: #FFFFFF;
`;

export const FeaturedArtistButton = styled.div`
    display: inline-flex;
    align-items: center;
    .viewMore {
        color: #FFFFFF;
        padding: 10px 40px;
        opacity : 1;
        border: 1px solid #1E50FF;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0);
        &:hover {
            background: #1E50FF;
        }
    }
`;

export const FeaturedArtistCardItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap:20px;
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const FeaturedArtistCard = styled.div`
    max-width: 300px;
`;

export const FeaturedArtistItem = styled.div`
    background-color: #272D37;
    border-radius: 16px;
    padding: 10px;
    cursor: pointer;
`;

export const FeaturedArtistImgBox = styled.div`
    position: relative;
    img {
        max-width: 100%;
        max-height: 100%;
        border-radius: 16px;
    }
`;

export const FeaturedArtistPresonImg = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 30%);
    transition: transform 0.3s ease;
    img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        border: 2px solid #FFFFFF;
        object-fit: cover;
    }
    &:hover {
        transform: translate(-50%, 30%) scale(1.2);
    }
`;

export const FeaturedArtistitemDetail = styled.div`
    position: relative;
    .title {
        margin-top:60px;
        margin-bottom: 20px;
        text-align: center;

        .name {
          font-size: 24px;
          line-height: 32px;
          text-transform: capitalize;
          color: #FFFFFF;
        }
    }
`;

// createYourOwn

export const CreateYourOwnContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 16px;
    background: radial-gradient(151.95% 463.58% at -44.29% -62.34%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(37px);
    border: 1px solid #1E50FF;
    padding: 50px 0;
    margin: 150px 0;
`;

export const CreateYourOwnTitle = styled.div`
    font-size: 48px;
    line-height: 64px;
    text-transform: capitalize;
    text-align: center;
    color: #FFFFFF;
    margin: 0 auto;
    margin-bottom: 30px;
`;

export const CreateYourOwnInside = styled.div`
    width: fit-content;
    display: flex;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    margin: 0 auto;
    max-width: 650px;
    color: #FFFFFF;
    margin-bottom: 30px;
`;

export const CreateYourOwnButton = styled.div`
    margin: 0 auto;
    button {
        background: #1E50FF;
        border: none;
        border-radius: 10px;
        padding: 10px 30px;
        font-weight: 600;
        font-size: 16px;
        order: 0;
    }
`;

// HOT 

export const HotTitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 100px 0;
`;

export const HotTitle = styled.div`
    display: flex;
    align-content: center;
    font-weight: 700;
    font-size: 48px;
    line-height: 64px;
    text-transform: capitalize;
    color: #FFFFFF;
`;

export const HotTitleButton = styled.div`
    display: flex;
    .buttonGroup {
        display: flex;
        justify-content: flex-end;
        gap: 15px;
        height: 50px;
        margin:0;
        button {
            width: fit-content;
            color: #FFFFFF;
            padding: 0 30px;
            opacity : 1;
            border: 1px solid #1E50FF;
            border-radius: 10px;
            background: rgba(0, 0, 0, 0);
            &:hover {
                background: #1E50FF;
            }
        }
    }
    .selectGroup {
        display: none;
        select {
            outline: none; /* 移除輪廓 */
            background: black;
            border-radius: 16px;
            border: 1px solid #1E50FF;
            &:hover {
                background: #1E50FF;
            }
        }
        select:focus {
            border: 2px solid blue;
        }
    }
    @media (max-width: 1024px) {
        .buttonGroup {
            display: none;
        }
        .selectGroup {
            display: flex;
        }
    }
    
`;

export const HotCardItem = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: center;
    }
`;

export const HotCard = styled.div`
    box-sizing: border-box;
    width: 30%;
    padding: 1% 1%;
    background-color: #272D37;
    text-align: center;
    font-size: 18px;
    border-radius: 16px;
    @media (max-width: 1024px) {
        width: 30%;
    }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

export const HotImgBox = styled.div`
    position: relative;
    width: fit-content;
    button {
        display: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        background: #1E50FF;
        border: none;
        border-radius: 10px;
        padding: 10px 30px;
        font-weight: 600;
        font-size: 16px;
        line-height: 32px;
        text-transform: capitalize;
        order: 0;
        flex-grow: 0;
    }
    img {
        width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        border-radius: 16px;
        cursor: pointer;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0);
        transition: background 0.3s ease;
    }
    &:hover {
        &::after {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 16px;
        }

        button {
            display: flex;
            z-index: 1;
        }
    }
`;

export const HotItemDetail = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 35px;
`;

export const HotSubTitle = styled.div`
    display: flex;
    margin: 0 20px;
    justify-content: space-between;

    span {
        font-family: 'Urbanist';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        cursor: pointer;
        color: #FFFFFF;
        width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`;

export const HotTraining = styled.div`
    cursor: pointer;
    padding: 0 20px;
    background: #1E50FF;
    border-radius: 10px;
`;

export const HotPersonDetail = styled.div`
    display: flex;
    margin: 10px 20px 0 20px;
    justify-content: space-between;
`;

export const HotType = styled.div`
    font-size: 14px;
    line-height: 24px;
    color: #8F9CA9;
`;

export const HotCurrentBid = styled.div`
    font-size: 14px;
    line-height: 24px;
    color: #8F9CA9;
`;

export const HotButton = styled.div`
    width: fit-content;
    margin: 40px auto;
    button {
        color: #FFFFFF;
        padding: 10px 40px;
        opacity : 1;
        border: 1px solid #1E50FF;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0);
        &:hover {
            background: #1E50FF;
        }
    }
`;
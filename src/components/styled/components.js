import styled from "styled-components";

export const Section = styled.div`
     padding:40px 0px;

     @media(min-width:768px){
          padding:50px 0px;
     }
     @media(min-width:1024px){
          padding:70px 0px;
     }
`
export const HeaderSection = styled.div`
   & .header_top{
        padding:10px 0px;

        & .header_top_content{
               display: flex;
               align-items: center;
               justify-content: space-between;
               & .logo_wrapper{
                    display: flex;
                    justify-content: center;
                    @media(min-width:768px){
                         .logo_wrapper{
                             display: flex;
                             justify-content: flex-start;
                         }
                     }
                    & .logo{
                         width: 100px;
                         height: 40px;
                    }
               }
               & .header_top_icon_wrapper{
                    display: flex;
                    gap:20px;
                    align-items: center;
                    & .icon_wrapper{
                         display: flex;
                    }
               }
        }
       
   }
   & .header_bottom{
        background:var(--primaryColor);
        padding:10px 0px;

        & .menu{
          display: flex;
          gap:20px;
          & .menu_item{
               & .menu_item_link{
                    display: inline-block;
                    font-size: 14px;
                    font-weight: 500;
                    color:#ffffff;
                }
          }
      }
   }
`
export const FooterSection = styled.div`
     background:#002632;
    padding:40px 0px;
     & .footer_content {
          display: flex;
          flex-direction: column;
          align-items: center;

          & .footer_logo_wrapper {
               margin-bottom: 30px;

               & .footer_logo{
                    width: 83.33px;
                    height: 50px;

                    & img {
                         width: 100%;
                         height: 60px;
                     }
               }
           }

           & .footer_description {
               max-width: 646px;
               text-align: center;
               margin-bottom: 27px;
               padding: 0px 40px;

               & .footer_description_txt {
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 28px;
                    color: rgba(255, 255, 255, .5);
                }
           }

           & .footer_navbar{
               & .footer_navbar_list {
                   list-style: none;
                   margin: 0;
                   padding: 0;
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   gap: 45px;

                   & .footer_navbar_link {
                    font-size: 14px;
                    font-weight: 500;
                    color: rgba(255, 255, 255, .7);
                }
               }
               
           }
           & .footer_socket {
               max-width: 800px;
               width: 100%;
               text-align: center;
               border-top: 1px solid rgba(255, 255, 255, .2);
               padding: 16px 0px;
               margin-top: 50px;
               & .footer_socket_txt {
                   font-size: 14px;
                   font-weight: 400;
                   color: rgba(255, 255, 255, .7);
               }
           }
           
      }
`
export const Container = styled.div`
    max-width:1320px;
    width:100%;
    padding:0px 20px;
    margin: 0 auto;
`
export const Item = styled.div`
     
   & .top_col{
          position:relative;
          transition: all .3s;
          @media(min-width:1024px){
               cursor:pointer;
          }
          & .product_img_wrapper{
               border:1px solid rgba(13,13,13,.05);
               & img{
                    width:100%;
                    display:block;
               }
          }
          & .view_details{
               position:absolute;
               width:100%;
               height:100%;
               left:0;
               top:0;
               transition:all .3s;
               display:flex;
               justify-content:center;
               align-items:center;
          
               & .view_btn{
                    visibility:hidden;
                    & svg{
                         & path{
                              stroke:#ffffff;
                              fill:#ffffff;
                         }
                    }
               }
          }
   }
   :hover .top_col .view_details{
          background:rgba(13,13,13,.5);
          & .view_btn{
               visibility:visible;
          }
   }
   & .bottom_col{
     text-align:center;
     display:flex;
     flex-direction:column;
     gap:10px;
     padding:15px 10px 15px 10px;
     & .description{
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;  
          overflow: hidden;
     }
          & .add_to_cart_btn_wrapper{
               & .add_to_cart_btn{
                    background:transparent;
                    color:var(--tertiaryColor);
                    transition:all.3s ease-in-out;
               }
          }
   }
   &:hover .add_to_cart_btn_wrapper .add_to_cart_btn{
     background:var(--primaryColor);
     color:var(--secondaryColor);
   }
`

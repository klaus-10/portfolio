import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../Work.json";

import "./WorkPage.css";
import TemplateCard from "../../../components/template-card/TemplateCard";
import BasicModal from "../../../components/model/Modal";
import Card from "../../../components/card/Card";
import GridBoxWorkPage from "../../../components/gridbox/GridBoxWorkPage";

// import video from "../../../assets/video/spotify_app_overview.mp4";

export default function WorkPage() {
  const childFeatureRef = useRef(null);

  let { name } = useParams();

  const [workList, setWorkList] = useState([...data?.done, ...data?.progress]);
  const [item, setItem] = useState();

  const [openModalVal, setOpenModalVal] = useState(false);
  const [featureItem, setFeatureItem] = useState({});

  console.log(item);

  useEffect(() => {
    for (let i = 0; i < workList.length; i++) {
      if (
        workList[i].name.toLowerCase() === name.toLowerCase() ||
        workList[i].name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      ) {
        setItem(workList[i]);
      }
    }
  }, []);

  // import dinamico del video se esiste
  console.log(process.env.PUBLIC_URL + item?.video);

  console.log("public", window.location.origin);
  console.log("video", item?.video);

  // go on top function
  useEffect(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  const handleOpenModalVal = (feature) => {
    setOpenModalVal(!openModalVal);
    if (!openModalVal) setFeatureItem(feature);
  };

  return (
    <div className="work-page">
      <div className="work-title margin-btn-80">
        <h1>{item?.name}.</h1>
      </div>

      <div className="grid-wrap flex-center">
        <div className="work-page-info ww text-max-width">
          <div className="work-page-item">
            <div className="timeline">
              <h3>Timeline</h3>
              <p>{item?.timeline}</p>
            </div>
          </div>
          <div className="work-page-item">
            <h3>Team</h3>
            <div className="team">
              {item?.team?.map((el, pos) => (
                <div key={pos + "m"} className="avatar">
                  {el.charAt(0)}
                </div>
              ))}
            </div>
          </div>

          <div className="work-page-item">
            <h3>Role</h3>

            <p className="work-page-item-desc">{item?.role}</p>
          </div>
        </div>
      </div>

      <div className="image portrait-image">
        <img src={item?.first_img} alt="" />
      </div>

      <div className="grid-wrap flex-center">
        <div className="text-max-width space inner_widht">
          <div className="about-title2">
            <h1>Overview.</h1>
          </div>
          <p>{item?.overview}</p>
          <br></br>
          <p>{item?.details}</p>
        </div>
      </div>

      {/* <div className="image landscape-image">
        <img src="https://source.unsplash.com/random" alt="" />
      </div> */}

      {/* {item?.details && (
        <div className="grid-wrap flex-center">
          <div className="text-max-width space">
            <div className="about-title2">
              <h1>Details.</h1>
            </div>
            <p>{item?.details}</p>
          </div>
        </div>
      )} */}

      <div className="image landscape-image">
        <iframe
          style={{ width: "100%", minHeight: "75vh", position: "relative" }}
          src={
            item?.video
              ? `${process.env.PUBLIC_URL}/video/${item.video}.mp4`
              : item?.url
          }
        />
      </div>

      {/* {item?.video && (
        <video width="320" height="240" controls>
          <source src={process.env.PUBLIC_URL + item?.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {item?.url && (
        <video width="320" height="240" controls>
          <source
            src={`${process.env.PUBLIC_URL}/video/${item.url}.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      )} */}

      {item?.mainFeature && (
        <>
          <div className="grid-wrap flex-center">
            <div className="text-max-width space">
              <div className="about-title2">
                <h1>Features.</h1>
              </div>
            </div>
          </div>

          <div className="grid-wrap flex-center">
            <div className="feature ww">
              {item.mainFeature.map((el, pos) => (
                <div className="center">
                  <div className="text-max-width inner_widht margin-bottom-s">
                    <h3>{el.name}</h3>
                    <p>{el.desc}</p>
                    <ul>
                      {el?.descList?.map((el_in, ind) => {
                        <li>
                          <p>{el_in}</p>
                        </li>;
                      })}
                    </ul>
                  </div>

                  {el.descFeature.length !== 0 ? (
                    <GridBoxWorkPage data={el.descFeature} />
                  ) : (
                    <div className="image landscape-image margin-bottom-m">
                      {el.video ? (
                        <video
                          style={{ width: "100%", minHeight: "75vh" }}
                          src={`${process.env.PUBLIC_URL}/video/${el.video}.mp4`}
                          loop
                          autoPlay
                          controls
                        />
                      ) : (
                        <img
                          src={`${process.env.PUBLIC_URL}/images/${el.img}.png`}
                          alt=""
                        />
                      )}
                      {/* <p>{el.desc}</p> */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {item?.feature && item?.feature?.length !== 0 && (
        <div className="flex-center page-height">
          <div className="grid-wrap flex-center">
            <div className="text-max-width space">
              <div className="about-title2">
                <h1>Technical Features.</h1>
              </div>
            </div>
          </div>

          <div className="grid-wrap flex-center text-max-width">
            <div className="technical_feature ww">
              {item.feature.map((el, pos) => (
                // <div className="point-item">
                //   {/* <div>01</div> */}
                //   <h3>Make it</h3>
                //   <p>
                //     I sketch wireframes and make prototypes. Talking through
                //     tactile designs existing in the browser is worth its weight.
                //     Design tools only carry you so far; the rest should be
                //     realized with a link my team can rally around.
                //   </p>
                // </div>

                // <div
                //   key={pos + "s"}
                //   onClick={() => {
                //     setFeatureItem(el); // Store the current feature item
                //     handleOpenModalVal(el); // Open the modal
                //   }}
                // >
                //   <TemplateCard key={pos + "s"} title={el.name} img={el?.img} />
                // </div>

                // <div className="center">
                //   <div className="text-max-width inner_widht margin-bottom-s">
                //     <h3>{el.name}</h3>
                //     <p>{el.desc}</p>
                //   </div>

                //   <div class="image landscape-image margin-bottom-m">
                //     <img src="https://source.unsplash.com/random" alt="" />
                //     {/* <p>{el.desc}</p> */}
                //   </div>
                // </div>

                <div className="technical_feature_item" key={pos + "d"}>
                  <h3>{el.name}</h3>
                  <p>{el.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {item?.technology && (
        <>
          <div className="about-title2">
            <h1>Technology.</h1>
            {/* <p>I love Design, Technology, and Story.</p> */}
          </div>
          <div className="grid-wrap flex-center">
            <div className="about-skill ww">
              {item?.technology?.map((el, pos) => (
                // <div className="skill-item">
                <Card
                  key={pos + "v"}
                  title={el.name}
                  desc={el.desc}
                  pos={pos}
                  img={el.img}
                />
                // </div>
              ))}
            </div>
          </div>
        </>
      )}

      <BasicModal
        title={featureItem?.name}
        desc={featureItem?.desc}
        img={featureItem?.img}
        state={openModalVal}
        openFunction={handleOpenModalVal}
      />
    </div>
  );
}

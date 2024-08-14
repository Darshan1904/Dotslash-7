import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { useSnapshot } from 'valtio';

import { Link } from 'react-router-dom';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import { DecalTypes, EditorTabs, FilterTabs } from '../config/constants';
import { reader } from '../config/helpers';
import { fadeAnimation, slideAnimation } from '../config/motion';
import state from '../store';
import axios from 'axios'
import ImageDownloader from '../components/ImageDownloader';

const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');

  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case "aipicker":
        return <AIPicker
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      case "download":
        return <ImageDownloader />

      default:
        return null;
    }
  }

  const handleSubmit = async (type) => {
    if (!prompt) return alert("Please enter a prompt");

    try {
      setGeneratingImg(true);

      const options = {
        method: 'POST',
        url: process.env.REACT_APP_OPENAI_URL,
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.REACT_APP_OPENAI_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_OPENAI_HOST
        },
        data: { text: prompt }
      };
      const response = await axios.request(options);

      const photo = response.data.generated_image;
      console.log(photo)
      handleDecals(type, `${photo}`)
    } catch (error) {
      alert(error)
    } finally {
      setGeneratingImg(false);
      setActiveEditorTab("");
    }
  }

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;
    console.log(state)
    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
        state.isFullTexture = !activeFilterTab[tabName];
        break;
      
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  return (
    <AnimatePresence>
      <>
        <motion.div
          key="custom"
          className="absolute top-0 left-0 z-10"
          {...slideAnimation('left')}
        >
          <div className="flex items-center min-h-screen">
            <div className="editortabs-container tabs">
              {EditorTabs.map((tab) => (
                <Tab
                  key={tab.name}
                  tab={tab}
                  handleClick={() => setActiveEditorTab(tab.name)}
                />
              ))}

              {generateTabContent()}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute z-10 top-5 right-5"
          {...fadeAnimation}
        >
          <Link to={-1}>
            <CustomButton
              type="filled"
              title="Go Back"
              customStyles="w-fit px-4 py-2.5 font-bold text-sm "
            /></Link>
        </motion.div>

        <motion.div
          className='filtertabs-container'
          {...slideAnimation("up")}
        >
          {FilterTabs.map((tab) => (
            <Tab
              key={tab.name}
              tab={tab}
              isFilterTab
              isActiveTab={activeFilterTab[tab.name]}
              handleClick={() => handleActiveFilterTab(tab.name)}
            />
          ))}
        </motion.div>
      </>
    </AnimatePresence>
  )
}

export default Customizer
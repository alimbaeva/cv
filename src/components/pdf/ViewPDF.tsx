import { FC } from 'react';
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
import { getFilePlugin } from '@react-pdf-viewer/get-file/lib/index';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import './ViewPDF.scss';
import { BackBtn } from '../portfolioSlide/BackBtn';

export const ViewPDF: FC = () => {
  const getFilePluginInstance = getFilePlugin();
  const { DownloadButton } = getFilePluginInstance;

  return (
    <div className="main pdf">
      <div className="pdf__btn">
        <BackBtn />
      </div>
      <div
        className="rpv-core__viewer"
        style={{
          border: '1px solid rgba(0, 0, 0, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '90%',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#eeeeee',
            borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
            display: 'flex',
            padding: '4px',
          }}
        >
          <DownloadButton />
        </div>
        <div
          style={{
            flex: 1,
            overflow: 'hidden',
          }}
        >
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
            <Viewer fileUrl="/Resume_AAK.pdf" plugins={[getFilePluginInstance]} />
          </Worker>
        </div>
      </div>
      <div className="pdf__btn">
        <BackBtn />
      </div>
    </div>
  );
};

import React from 'react';
import Papa from 'papaparse';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux';
import { setData } from '../features/schedule/scheduleSlice';
import './DropArea.css';


const DropArea = () => {
    const dispatch = useDispatch();

    const handleDrop = files => {
        if (files.length) {
            files.forEach(file => {
                const config = {
                    error: (error,file) => {
                        console.log('Parsing Error: ', error, file);
                    },
                    complete: (results, file) => {
                        console.log('Parsing Complete: ', results, file);
                        dispatch(setData(results.data));
                    },
                    skipEmptyLines: true
                }
                Papa.parse(file, config);
            })
        }
    }

    return (
        <Dropzone
        onDrop={handleDrop}
        accept="application/*"
        >
            {({
                getRootProps,
                getInputProps,
                isDragActive,
                isDragAccept,
                isDragReject
            }) => {
                const additionalClass = isDragAccept ? 'accept' : isDragReject ? 'reject' : '';
                return (
                    <div {...getRootProps({className: `dropzone ${additionalClass}`})}>
                        <input {...getInputProps()}/>
                        <div id="drag-instructions">
                            <h1>How to Get Data Into the Schedule Viewer</h1>
                            <ol className="drag-instructions">
                                <li>Open TIMS</li>
                                <li>My TIMS &gt; View Schedule</li>
                                <li>Select and Copy the Entire Schedule
                                    <ul className="drag-instructions">
                                        <li>Click anywhere and press Ctrl + A &amp; Ctrl + C</li>
                                        <li>Edit Menu &gt; Select All &amp; Copy</li>
                                    </ul>
                                </li>
                                <li>Open Excel</li>
                                <li>Paste Schedule into Cell A1</li>
                                <li>Save as .csv format</li>
                                <li>Drag and drop the saved file onto this box, or click in the box to browse for the schedule</li>
                                <br/>
                                <p><em>Note:</em> Keep the .csv file handy. If you refresh this page, you will may need to upload it again.</p>
                            </ol>
                        </div>
                        {isDragAccept && 'That is the right type of file'}
                        {isDragReject && 'Wrong filetype!'}
                    </div>
                )
            }}   
        </Dropzone>
    )
}

export default DropArea

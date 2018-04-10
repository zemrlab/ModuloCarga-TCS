import React from 'react';
import axios, { post } from 'axios';

function uploadSuccess({ data }) {
    return {
        type: 'UPLOAD_DOCUMENT_SUCCESS',
        data,
    };
}

function uploadFail(error) {
    return {
        type: 'UPLOAD_DOCUMENT_FAIL',
        error,
    };
}

function UploadRequest({ file, name }) {
    let data = new FormData();
    data.append('file', document);
    data.append('name', name);

    return (dispatch) => {
        axios.post('/files', data)
            .then(response => dispatch(uploadSuccess(response))
                .catch(error => dispatch(uploadFail(error))));
    };
}

export default UploadRequest;
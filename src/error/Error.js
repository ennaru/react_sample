import React from 'react'
import { Link } from 'react-router-dom';

export function Error404(userInfo) {
    return (
        <div>
            <h3>404 not found</h3>
            <p>요청하신 페이지를 찾을 수 없습니다. URL 주소가 올바른 지 다시 한 번 확인해 주세요.</p>
        </div>
   );
}

export function Error500(userInfo) {
    return (
        <div>
            <h3>500 internal Server Error</h3>
            <p>페이지 호출 중 서버에서 오류가 발생하였습니다.</p>
        </div>
   );
}
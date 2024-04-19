const Icon = ({name}) => {
    return ( 
        <>
            {(() => {
                switch (name) {
                    case 'linkedIn':
                        return (
                            <svg width="35" height="35" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_11_4)">
                            <path d="M30.94 -0.139994H4.06002C1.74162 -0.139994 -0.139984 1.74161 -0.139984 4.06001V30.94C-0.139984 33.2584 1.74162 35.14 4.06002 35.14H30.94C33.2584 35.14 35.14 33.2584 35.14 30.94V4.06001C35.14 1.74161 33.2584 -0.139994 30.94 -0.139994ZM10.78 13.3V29.26H5.74002V13.3H10.78ZM5.74002 8.65481C5.74002 7.47881 6.74802 6.58001 8.26002 6.58001C9.77202 6.58001 10.7212 7.47881 10.78 8.65481C10.78 9.83081 9.83922 10.78 8.26002 10.78C6.74802 10.78 5.74002 9.83081 5.74002 8.65481ZM29.26 29.26H24.22C24.22 29.26 24.22 21.4816 24.22 20.86C24.22 19.18 23.38 17.5 21.28 17.4664H21.2128C19.18 17.4664 18.34 19.1968 18.34 20.86C18.34 21.6244 18.34 29.26 18.34 29.26H13.3V13.3H18.34V15.4504C18.34 15.4504 19.9612 13.3 23.2204 13.3C26.5552 13.3 29.26 15.5932 29.26 20.2384V29.26Z" fill="#0DD55A"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_11_4">
                            <rect width="35" height="35" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        )
                    case 'github':
                        return (
                            <svg width="36" height="35" viewBox="0 0 36 35" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_11_28)">
                            <path d="M18 0C8.061 0 0 7.83562 0 17.5C0 25.2321 5.157 31.7917 12.3105 34.106C13.209 34.2679 13.5 33.7254 13.5 33.2646V30.0067C8.493 31.0654 7.4505 27.9417 7.4505 27.9417C6.6315 25.919 5.451 25.3808 5.451 25.3808C3.8175 24.2944 5.5755 24.3177 5.5755 24.3177C7.383 24.4402 8.334 26.1217 8.334 26.1217C9.939 28.7962 12.5445 28.0233 13.572 27.5756C13.7325 26.4454 14.199 25.6725 14.715 25.2365C10.7175 24.7917 6.5145 23.291 6.5145 16.5871C6.5145 14.6752 7.218 13.1148 8.3685 11.8898C8.1825 11.4479 7.566 9.66729 8.544 7.25812C8.544 7.25812 10.056 6.78854 13.4955 9.05187C14.931 8.66396 16.47 8.47 18 8.46271C19.53 8.47 21.0705 8.66396 22.509 9.05187C25.9455 6.78854 27.4545 7.25812 27.4545 7.25812C28.434 9.66875 27.8175 11.4494 27.6315 11.8898C28.7865 13.1148 29.484 14.6767 29.484 16.5871C29.484 23.3085 25.2735 24.7887 21.2655 25.2219C21.9105 25.7644 22.5 26.829 22.5 28.4623V33.2646C22.5 33.7298 22.788 34.2767 23.7015 34.1046C30.849 31.7873 36 25.2292 36 17.5C36 7.83562 27.9405 0 18 0Z" fill="#0DD55A"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_11_28">
                            <rect width="36" height="35" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        ) 
                        case 'github_prg':
                            return (
                                <svg width="21" height="20" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.379 32.2079C13.379 32.3734 13.1935 32.5057 12.9597 32.5057C12.6935 32.5305 12.5081 32.3982 12.5081 32.2079C12.5081 32.0425 12.6935 31.9102 12.9274 31.9102C13.1694 31.8854 13.379 32.0177 13.379 32.2079ZM10.871 31.8357C10.8145 32.0012 10.9758 32.1914 11.2177 32.241C11.4274 32.3237 11.6694 32.241 11.7177 32.0756C11.7661 31.9102 11.6129 31.7199 11.371 31.6455C11.1613 31.5876 10.9274 31.6703 10.871 31.8357ZM14.4355 31.6951C14.2016 31.753 14.0403 31.9102 14.0645 32.1004C14.0887 32.2658 14.2984 32.3734 14.5403 32.3155C14.7742 32.2576 14.9355 32.1004 14.9113 31.935C14.8871 31.7778 14.6694 31.6703 14.4355 31.6951ZM19.7419 0C8.55645 0 0 8.70954 0 20.1817C0 29.3544 5.62903 37.2037 13.6694 39.9663C14.7016 40.1565 15.0645 39.5031 15.0645 38.9655C15.0645 38.4527 15.0403 35.6239 15.0403 33.887C15.0403 33.887 9.39516 35.1277 8.20968 31.4222C8.20968 31.4222 7.29032 29.0153 5.96774 28.3949C5.96774 28.3949 4.12097 27.0964 6.09677 27.1212C6.09677 27.1212 8.10484 27.2866 9.20968 29.2551C10.9758 32.4478 13.9355 31.5297 15.0887 30.9838C15.2742 29.6604 15.7984 28.7423 16.379 28.1964C11.871 27.6836 7.32258 27.0136 7.32258 19.0568C7.32258 16.7822 7.93548 15.6408 9.22581 14.1851C9.01613 13.6474 8.33064 11.4308 9.43548 8.56893C11.121 8.03131 15 10.8021 15 10.8021C16.6129 10.339 18.3468 10.0991 20.0645 10.0991C21.7823 10.0991 23.5161 10.339 25.129 10.8021C25.129 10.8021 29.0081 8.02304 30.6935 8.56893C31.7984 11.439 31.1129 13.6474 30.9032 14.1851C32.1936 15.6491 32.9839 16.7905 32.9839 19.0568C32.9839 27.0385 28.2339 27.6753 23.7258 28.1964C24.4677 28.8498 25.0968 30.0905 25.0968 32.0342C25.0968 34.8216 25.0726 38.2707 25.0726 38.9489C25.0726 39.4866 25.4435 40.14 26.4677 39.9498C34.5323 37.2037 40 29.3544 40 20.1817C40 8.70954 30.9274 0 19.7419 0ZM7.83871 28.5273C7.73387 28.61 7.75806 28.8002 7.89516 28.9574C8.02419 29.0897 8.20968 29.1476 8.31452 29.0401C8.41935 28.9574 8.39516 28.7671 8.25806 28.61C8.12903 28.4776 7.94355 28.4197 7.83871 28.5273ZM6.96774 27.8573C6.91129 27.9648 6.99194 28.0972 7.15323 28.1799C7.28226 28.2626 7.44355 28.2378 7.5 28.122C7.55645 28.0145 7.47581 27.8821 7.31452 27.7994C7.15323 27.7498 7.02419 27.7746 6.96774 27.8573ZM9.58065 30.8018C9.45161 30.9094 9.5 31.1575 9.68548 31.3147C9.87097 31.5049 10.1048 31.5297 10.2097 31.3974C10.3145 31.2898 10.2661 31.0417 10.1048 30.8846C9.92742 30.6943 9.68548 30.6695 9.58065 30.8018ZM8.66129 29.586C8.53226 29.6687 8.53226 29.8837 8.66129 30.074C8.79032 30.2642 9.00806 30.3469 9.1129 30.2642C9.24193 30.1567 9.24193 29.9416 9.1129 29.7514C9 29.5612 8.79032 29.4785 8.66129 29.586Z"/>
                                </svg>
                            )      
                    case 'html':
                        return (
                            <svg viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.7292 4.6875H6.27083L8.95833 36.5625L21.5 40.3125L34.0417 36.5625L36.7292 4.6875Z" fill="#E65100"/>
                            <path d="M21.5 7.5V37.4063L31.5333 34.4062L33.7729 7.5H21.5Z" fill="#FF6D00"/>
                            <path d="M21.5 23.4375V19.6875H29.2042L28.5771 30.4688L21.5 32.9062V28.9688L25.1729 27.6562L25.4417 23.4375H21.5ZM29.4729 15.9375L29.7417 12.1875H21.5V15.9375H29.4729Z" fill="white"/>
                            <path d="M21.5 28.9688V32.9062L14.4229 30.4688L14.0646 25.3125H17.6479L17.8271 27.6562L21.5 28.9688ZM17.1104 15.9375H21.5V12.1875H13.3479L13.975 23.4375H21.5V19.6875H17.3792L17.1104 15.9375Z" fill="#EEEEEE"/>
                            </svg>
                        ) 
                    case 'css':
                        return (
                            <svg viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.7292 4.6875H6.27084L8.95834 36.5625L21.5 40.3125L34.0417 36.5625L36.7292 4.6875Z" fill="#0277BD"/>
                            <path d="M21.5 7.5V37.4063L31.5333 34.4062L33.7729 7.5H21.5Z" fill="#039BE5"/>
                            <path d="M29.6521 12.1875H21.5V15.9375H25.8896L25.6208 19.6875H21.5V23.4375H25.4417L25.1729 27.6562L21.5 28.9688V32.9062L28.5771 30.4688L29.2042 19.6875L29.6521 12.1875Z" fill="white"/>
                            <path d="M21.5 12.1875V15.9375H13.5271L13.2583 12.1875H21.5ZM17.3792 19.6875L17.5583 23.4375H21.5V19.6875H17.3792ZM17.7375 25.3125H14.1542L14.4229 30.4688L21.5 32.9062V28.9688L17.8271 27.6562L17.7375 25.3125Z" fill="#EEEEEE"/>
                            </svg>
                        )
                    case 'js':
                        return (
                            <svg viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.375 39.375V5.625H37.625V39.375H5.375Z" fill="#F7DF1E"/>
                            <path d="M26.4611 30.8878C27.081 31.9416 27.7547 32.9512 29.1818 32.9512C30.3804 32.9512 31.0093 32.3278 31.0093 31.4653C31.0093 30.4331 30.3589 30.0666 29.0402 29.4656L28.3173 29.1431C26.2309 28.2169 24.8433 27.0563 24.8433 24.6047C24.8433 22.3453 26.4961 20.6259 29.0788 20.6259C30.9179 20.6259 32.2393 21.2925 33.1924 23.0381L30.9403 24.5447C30.4449 23.6184 29.9092 23.2538 29.0788 23.2538C28.2313 23.2538 27.6947 23.8134 27.6947 24.5447C27.6947 25.4484 28.2322 25.8141 29.4729 26.3737L30.1959 26.6962C32.6549 27.7922 34.0417 28.9116 34.0417 31.4278C34.0417 34.1391 31.9956 35.625 29.249 35.625C26.5624 35.625 25.0368 34.2141 24.1875 32.4675L26.4611 30.8878ZM16.082 30.9647C16.5353 31.8141 17.2242 32.4675 18.215 32.4675C19.1628 32.4675 19.7083 32.0756 19.7083 30.5522V20.625H22.6941V31.0322C22.6941 34.1888 20.9446 35.625 18.3897 35.625C16.0811 35.625 14.4149 33.9881 13.7358 32.4675L16.082 30.9647Z" fill="#000001"/>
                            </svg>
                        )
                        case 'react':
                            return (
                                <svg viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.5 25.65C25.317 25.65 26.79 24.2397 26.79 22.5C26.79 20.7603 25.317 19.35 23.5 19.35C21.683 19.35 20.21 20.7603 20.21 22.5C20.21 24.2397 21.683 25.65 23.5 25.65Z" fill="#39C1D7"/>
                                <path d="M23.5 26.1C21.4268 26.1 19.74 24.4849 19.74 22.5C19.74 20.515 21.4268 18.9 23.5 18.9C25.5732 18.9 27.26 20.515 27.26 22.5C27.26 24.4849 25.5732 26.1 23.5 26.1ZM23.5 19.8C21.9448 19.8 20.68 21.0109 20.68 22.5C20.68 23.989 21.9448 25.2 23.5 25.2C25.0552 25.2 26.32 23.989 26.32 22.5C26.32 21.0109 25.0552 19.8 23.5 19.8Z" fill="#1F212B"/>
                                <path d="M41.595 22.5C41.595 20.0808 38.5522 17.9869 33.8315 16.7409C35.0451 12.1977 34.6714 8.62515 32.5028 7.41285C31.6474 6.9345 30.6097 6.8472 29.4187 7.1523C27.6242 7.6122 25.568 8.9568 23.5 10.9318C21.432 8.9568 19.3758 7.61265 17.5813 7.1523C16.3903 6.84675 15.3525 6.9345 14.4971 7.41285C12.3286 8.62515 11.9549 12.1972 13.1685 16.7409C8.44778 17.9869 5.405 20.0808 5.405 22.5C5.405 24.9192 8.44778 27.0131 13.1685 28.2596C11.9549 32.8027 12.3286 36.3753 14.4971 37.5876C15.0198 37.8797 15.6101 38.0268 16.2625 38.0263C16.6775 38.0263 17.1179 37.967 17.5813 37.8482C19.3758 37.3878 21.432 36.0436 23.5 34.0686C25.568 36.0436 27.6242 37.3878 29.4187 37.8482C29.8821 37.967 30.3225 38.0263 30.7375 38.0263C31.3899 38.0263 31.9802 37.8801 32.5028 37.5876C34.6714 36.3753 35.0446 32.8027 33.8315 28.2596C38.5522 27.0131 41.595 24.9192 41.595 22.5ZM29.7834 8.45595C30.1242 8.3691 30.44 8.325 30.731 8.325C31.1352 8.325 31.4905 8.4096 31.7917 8.57835C33.245 9.39105 33.5415 12.3673 32.4591 16.4133C30.9678 16.092 29.3407 15.8503 27.6116 15.7009C26.5968 14.3001 25.5412 13.0248 24.4776 11.9079C26.3661 10.0957 28.2188 8.85735 29.7834 8.45595ZM28.5549 25.3345C28.0007 26.2642 27.4174 27.1548 26.8191 28.0071C25.7569 28.0831 24.6496 28.125 23.5 28.125C22.3504 28.125 21.2431 28.0831 20.1813 28.0071C19.583 27.1548 18.9997 26.2642 18.4456 25.3345C17.8727 24.3733 17.3585 23.4265 16.8979 22.5004C17.3585 21.5743 17.8727 20.6275 18.4456 19.6659C19.0002 18.7357 19.583 17.8452 20.1818 16.9929C21.2435 16.9168 22.3504 16.875 23.5 16.875C24.6496 16.875 25.7565 16.9168 26.8187 16.9929C27.417 17.8452 28.0002 18.7362 28.5549 19.6659C29.1278 20.6271 29.642 21.5739 30.1026 22.5004C29.642 23.4265 29.1278 24.3733 28.5549 25.3345ZM30.8527 24.0952C31.3419 25.2027 31.7461 26.2687 32.0733 27.2821C31.004 27.5103 29.8497 27.7006 28.6169 27.8415C29.0126 27.2448 29.4027 26.6346 29.7792 26.0032C30.1604 25.3647 30.5162 24.7279 30.8527 24.0952ZM23.5 32.1107C22.7311 31.2966 21.9636 30.3952 21.2139 29.4201C21.9622 29.4547 22.7236 29.475 23.5 29.475C24.2764 29.475 25.0378 29.4547 25.7861 29.4201C25.0364 30.3948 24.2689 31.2962 23.5 32.1107ZM18.3826 27.8415C17.1503 27.7006 15.9955 27.5103 14.9263 27.2821C15.2534 26.2687 15.6576 25.2022 16.1468 24.0952C16.4834 24.7279 16.8396 25.3647 17.2203 26.0032C17.5973 26.635 17.9869 27.2452 18.3826 27.8415ZM16.1473 20.9052C15.658 19.7977 15.2534 18.7312 14.9267 17.7174C15.996 17.4892 17.1508 17.2989 18.3836 17.158C17.9874 17.7547 17.5977 18.3654 17.2213 18.9967C16.8396 19.6357 16.4838 20.2725 16.1473 20.9052ZM23.5 12.8898C24.2689 13.7038 25.0364 14.6052 25.7861 15.5803C25.0378 15.5452 24.2764 15.525 23.5 15.525C22.7236 15.525 21.9622 15.5452 21.2139 15.5799C21.9636 14.6052 22.7311 13.7038 23.5 12.8898ZM29.7792 18.9972C29.4027 18.3654 29.0126 17.7552 28.6169 17.1585C29.8497 17.2993 31.004 17.4897 32.0737 17.7178C31.7466 18.7317 31.3424 19.7977 30.8531 20.9056C30.5162 20.2725 30.1604 19.6357 29.7792 18.9972ZM15.2083 8.57835C15.51 8.4096 15.8644 8.325 16.2691 8.325C16.5595 8.325 16.8763 8.3691 17.2166 8.45595C18.7812 8.85735 20.6339 10.0953 22.5224 11.9074C21.4588 13.0243 20.4032 14.3001 19.3884 15.7005C17.6593 15.8499 16.0317 16.0915 14.5409 16.4128C13.4584 12.3669 13.755 9.3906 15.2083 8.57835ZM6.815 22.5C6.815 20.8818 9.35347 19.152 13.5524 18.0445C14.0079 19.4661 14.6057 20.9632 15.3413 22.5C14.6057 24.0367 14.0079 25.5339 13.5524 26.9555C9.35347 25.848 6.815 24.1182 6.815 22.5ZM17.2166 36.5441C16.4021 36.7519 15.7267 36.711 15.2083 36.4221C13.755 35.6094 13.4589 32.6331 14.5409 28.5871C16.0317 28.9084 17.6593 29.1501 19.388 29.2995C20.4027 30.7003 21.4583 31.9757 22.5219 33.093C20.6339 34.9047 18.7812 36.1426 17.2166 36.5441ZM31.7917 36.4221C31.2733 36.7119 30.5984 36.7524 29.7834 36.5441C28.2188 36.1426 26.3661 34.9047 24.4776 33.0926C25.5412 31.9757 26.5968 30.6999 27.6116 29.299C29.3407 29.1497 30.9678 28.908 32.4587 28.5867C33.5415 32.6331 33.245 35.6094 31.7917 36.4221ZM33.4476 26.9555C32.9921 25.5339 32.3943 24.0367 31.6587 22.5C32.3943 20.9632 32.9921 19.4656 33.4476 18.0445C37.6465 19.152 40.185 20.8818 40.185 22.5C40.185 24.1182 37.6465 25.848 33.4476 26.9555Z" fill="#39C1D7"/>
                                <path d="M16.2596 38.2509C15.5683 38.2509 14.9357 38.093 14.3792 37.7816C12.2021 36.5643 11.6612 33.1574 12.8855 28.4166C7.97825 27.0806 5.17 24.93 5.17 22.5C5.17 20.07 7.97825 17.9195 12.885 16.5834C11.6612 11.8427 12.2021 8.4357 14.3792 7.21845C15.29 6.70815 16.3875 6.61275 17.6424 6.93495C19.3898 7.38315 21.4118 8.65395 23.5 10.6155C25.5887 8.65395 27.6106 7.38315 29.3576 6.93495C30.612 6.61365 31.71 6.70905 32.6213 7.21845C34.7979 8.4357 35.3388 11.8427 34.1149 16.5834C39.0217 17.9195 41.83 20.07 41.83 22.5C41.83 24.93 39.0217 27.0806 34.1149 28.4166C35.3388 33.1574 34.7983 36.5639 32.6213 37.7816C31.7156 38.2878 30.6069 38.3855 29.3581 38.0651C27.6101 37.6169 25.5882 36.3461 23.5 34.385C21.4118 36.3461 19.3898 37.6173 17.6424 38.0651C17.1616 38.1884 16.6972 38.2509 16.2625 38.2509C16.2615 38.2509 16.2606 38.2509 16.2596 38.2509ZM16.2639 7.19955C15.6524 7.19955 15.1011 7.33545 14.6156 7.60725C12.6303 8.7174 12.1744 12.1109 13.3959 16.6851C13.4274 16.8039 13.3541 16.9254 13.2305 16.9578C8.47786 18.2124 5.64 20.2847 5.64 22.5C5.64 24.7154 8.47786 26.7876 13.231 28.0422C13.3546 28.0746 13.4279 28.1961 13.3964 28.3149C12.1744 32.8892 12.6303 36.2831 14.6156 37.3928C15.0997 37.6632 15.6529 37.8005 16.2596 37.8005C16.2606 37.8005 16.2615 37.8005 16.2625 37.8005C16.6563 37.8005 17.0793 37.7433 17.5207 37.6304C19.2347 37.1907 21.2454 35.9042 23.3341 33.9089C23.4257 33.8216 23.5743 33.8216 23.6659 33.9089C25.7546 35.9037 27.7652 37.1903 29.4793 37.6304C30.6045 37.9179 31.5873 37.8378 32.3844 37.3928C34.3697 36.2826 34.8256 32.8892 33.6036 28.3149C33.5721 28.1961 33.6454 28.0746 33.769 28.0422C38.5221 26.7876 41.36 24.7154 41.36 22.5C41.36 20.2847 38.5221 18.2124 33.769 16.9578C33.6454 16.9254 33.5721 16.8039 33.6036 16.6851C34.8251 12.1109 34.3692 8.71695 32.3839 7.60725C31.5854 7.1604 30.6078 7.08075 29.4789 7.36965C27.7648 7.8093 25.7546 9.09585 23.6654 11.0912C23.5738 11.1785 23.4253 11.1785 23.3336 11.0912C21.2445 9.09585 19.2343 7.8093 17.5202 7.36965C17.0779 7.25625 16.6587 7.19955 16.2639 7.19955ZM30.7314 36.8996C30.4198 36.8996 30.0833 36.8537 29.7228 36.7614C28.1572 36.3596 26.2862 35.1464 24.3112 33.2514C24.2229 33.1664 24.2196 33.0296 24.3037 32.9409C25.3682 31.8231 26.4159 30.5546 27.4184 29.1708C27.4579 29.1159 27.5208 29.0808 27.5904 29.075C29.288 28.9283 30.9086 28.6902 32.4074 28.3671C32.5301 28.3406 32.6551 28.4126 32.6866 28.5309C33.7845 32.6363 33.487 35.7345 31.9102 36.6161C31.5722 36.8051 31.1779 36.8996 30.7314 36.8996ZM24.8024 33.0845C26.6593 34.8368 28.3993 35.9559 29.8441 36.3267C30.5956 36.5189 31.2113 36.4856 31.6733 36.2277C33.0151 35.4771 33.2511 32.5949 32.2871 28.8536C30.864 29.1501 29.3369 29.372 27.7422 29.5137C26.7947 30.8151 25.8068 32.0148 24.8024 33.0845ZM16.2686 36.8996C15.8221 36.8996 15.4277 36.8051 15.0898 36.6165C13.513 35.7345 13.215 32.6363 14.3134 28.5309C14.3449 28.413 14.4699 28.3424 14.5926 28.3671C16.0909 28.6902 17.7115 28.9283 19.4096 29.075C19.4787 29.0808 19.5421 29.1159 19.5816 29.1708C20.5841 30.5546 21.6317 31.8231 22.6963 32.9409C22.7809 33.0296 22.7776 33.1664 22.6888 33.2514C20.7138 35.1459 18.8428 36.3596 17.2777 36.7614C16.9167 36.8532 16.5797 36.8996 16.2686 36.8996ZM14.7129 28.8536C13.7489 32.5944 13.9848 35.4771 15.3267 36.2277C15.7882 36.4851 16.4039 36.5189 17.1559 36.3267C18.6007 35.9559 20.3407 34.8363 22.1976 33.0845C21.1937 32.0148 20.2058 30.8151 19.2582 29.5137C17.6635 29.372 16.136 29.1501 14.7129 28.8536ZM23.5 32.3352C23.4337 32.3352 23.3703 32.3082 23.3256 32.261C22.544 31.4334 21.7699 30.5222 21.0245 29.5529C20.9709 29.4831 20.9639 29.3895 21.0066 29.313C21.0494 29.2365 21.1293 29.1897 21.2252 29.1947C22.779 29.2671 24.221 29.2671 25.7748 29.1947C25.8688 29.1893 25.9506 29.2365 25.9933 29.313C26.0361 29.3895 26.0295 29.4827 25.9755 29.5529C25.2301 30.5217 24.456 31.433 23.6744 32.261C23.6297 32.3082 23.5663 32.3352 23.5 32.3352ZM21.6985 29.6658C22.2865 30.4106 22.8909 31.1175 23.5 31.7736C24.1096 31.1175 24.7135 30.411 25.3015 29.6658C24.0739 29.7108 22.9261 29.7108 21.6985 29.6658ZM23.5 28.35C22.3866 28.35 21.2642 28.3104 20.1635 28.2317C20.0916 28.2267 20.0262 28.1903 19.9858 28.1327C19.3574 27.2376 18.7704 26.3336 18.2412 25.4462C17.6866 24.5156 17.163 23.5571 16.6855 22.5968C16.6549 22.5356 16.6549 22.4645 16.6855 22.4033C17.163 21.443 17.6866 20.4845 18.2412 19.5539C18.7699 18.6674 19.3569 17.7633 19.9863 16.8669C20.0262 16.8098 20.092 16.7733 20.1639 16.7679C22.3654 16.6104 24.635 16.6104 26.8361 16.7679C26.908 16.7729 26.9733 16.8093 27.0137 16.8669C27.643 17.7633 28.2301 18.6674 28.7588 19.5539C29.3134 20.4845 29.837 21.443 30.3145 22.4033C30.3451 22.4645 30.3451 22.5356 30.3145 22.5968C29.837 23.5571 29.3134 24.5156 28.7588 25.4462C28.2296 26.3336 27.6426 27.2376 27.0142 28.1327C26.9742 28.1898 26.9084 28.2263 26.8365 28.2317C25.7358 28.3104 24.6134 28.35 23.5 28.35ZM20.3125 27.7907C22.4176 27.9356 24.5824 27.9356 26.6871 27.7907C27.2854 26.9343 27.8447 26.0708 28.3504 25.2225C28.8806 24.3329 29.382 23.4176 29.8417 22.5C29.382 21.5825 28.8806 20.6667 28.3504 19.7775C27.8451 18.9302 27.2858 18.0666 26.6866 17.2089C24.5815 17.064 22.4171 17.064 20.312 17.2089C19.7132 18.0666 19.1534 18.9302 18.6482 19.7775C18.118 20.6672 17.6165 21.5825 17.1569 22.5C17.6165 23.4176 18.118 24.3333 18.6482 25.2225C19.1548 26.0712 19.7141 26.9343 20.3125 27.7907ZM28.6174 28.067C28.5375 28.067 28.4618 28.0278 28.4185 27.9621C28.3701 27.8883 28.3706 27.7947 28.419 27.7214C28.8552 27.0639 29.2335 26.4654 29.5752 25.8921C29.9343 25.29 30.2934 24.651 30.6435 23.9936C30.6849 23.9157 30.7718 23.8694 30.8611 23.8712C30.9523 23.8743 31.0336 23.9274 31.0693 24.0084C31.5464 25.088 31.9595 26.1675 32.2979 27.2165C32.3177 27.2763 32.3097 27.3416 32.2768 27.3956C32.2439 27.45 32.1884 27.4887 32.1245 27.5022C31.02 27.7385 29.8492 27.9279 28.6451 28.0656C28.6357 28.0665 28.6263 28.067 28.6174 28.067ZM30.8301 24.629C30.5509 25.1411 30.2671 25.6392 29.9836 26.1149C29.7096 26.5748 29.4121 27.0504 29.0812 27.5589C30.0071 27.441 30.9095 27.2921 31.7729 27.1148C31.5017 26.2985 31.1859 25.4655 30.8301 24.629ZM18.3826 28.067C18.3732 28.067 18.3638 28.0665 18.3544 28.0656C17.1508 27.9275 15.98 27.738 14.8755 27.5018C14.8116 27.4883 14.7566 27.4496 14.7232 27.3951C14.6903 27.3407 14.6828 27.2759 14.7021 27.216C15.0405 26.1666 15.4536 25.0875 15.9306 24.008C15.9664 23.9274 16.0477 23.8739 16.1389 23.8707C16.2244 23.8622 16.3151 23.9153 16.3565 23.9931C16.7066 24.6506 17.0657 25.2896 17.4248 25.8917C17.7669 26.465 18.1453 27.0635 18.581 27.7209C18.6299 27.7943 18.6299 27.8879 18.5814 27.9617C18.5382 28.0278 18.463 28.067 18.3826 28.067ZM15.2275 27.1148C16.0909 27.2921 16.9933 27.441 17.9192 27.5589C17.5879 27.0504 17.2908 26.5748 17.0168 26.1149C16.7329 25.6392 16.4495 25.1406 16.1703 24.629C15.8141 25.4655 15.4982 26.2985 15.2275 27.1148ZM33.4475 27.1805C33.3465 27.1805 33.2539 27.1179 33.2229 27.0212C32.7646 25.5906 32.1663 24.1011 31.4453 22.5941C31.4167 22.5347 31.4167 22.4658 31.4453 22.4064C32.1663 20.8994 32.7646 19.4094 33.2234 17.9784C33.261 17.8619 33.3897 17.7966 33.5105 17.8277C37.7725 18.9522 40.42 20.7423 40.42 22.5C40.42 24.2577 37.772 26.0478 33.5096 27.1724C33.4889 27.1778 33.4678 27.1805 33.4475 27.1805ZM31.9172 22.5C32.5921 23.9198 33.1594 25.3247 33.6041 26.6796C37.467 25.6253 39.95 23.9949 39.95 22.5C39.95 21.0051 37.467 19.3748 33.6041 18.3204C33.159 19.6758 32.5917 21.0807 31.9172 22.5ZM13.5524 27.1805C13.5318 27.1805 13.5111 27.1778 13.4899 27.1724C9.22798 26.0478 6.58 24.2577 6.58 22.5C6.58 20.7423 9.22751 18.9522 13.4899 17.8277C13.6112 17.7966 13.7395 17.8619 13.7771 17.9784C14.2358 19.4094 14.8341 20.8994 15.5551 22.4064C15.5838 22.4658 15.5838 22.5342 15.5551 22.5941C14.8337 24.1016 14.2358 25.5911 13.7776 27.0212C13.7466 27.1179 13.6535 27.1805 13.5524 27.1805ZM13.3959 18.3204C9.53301 19.3748 7.05 21.0051 7.05 22.5C7.05 23.9949 9.53301 25.6253 13.3959 26.6796C13.841 25.3247 14.4078 23.9202 15.0828 22.5C14.4083 21.0807 13.841 19.6758 13.3959 18.3204ZM30.8531 21.1307C30.7648 21.1307 30.6839 21.0834 30.6435 21.0078C30.2877 20.3382 29.9381 19.7168 29.5757 19.1088C29.2345 18.5364 28.8561 17.9379 28.419 17.2791C28.3701 17.2058 28.3701 17.1122 28.4185 17.0384C28.467 16.965 28.5534 16.9245 28.6456 16.9349C29.8502 17.073 31.0209 17.2625 32.1254 17.4983C32.1894 17.5118 32.2443 17.5505 32.2777 17.6049C32.3106 17.6594 32.3181 17.7242 32.2989 17.784C31.96 18.8352 31.5464 19.9148 31.0703 20.993C31.0346 21.0735 30.9533 21.1271 30.8621 21.1302C30.8583 21.1307 30.8555 21.1307 30.8531 21.1307ZM29.9832 18.8856C30.2703 19.3671 30.5495 19.8567 30.8296 20.3715C31.185 19.5363 31.5008 18.7025 31.772 17.8853C30.9086 17.708 30.0062 17.559 29.0798 17.4411C29.4126 17.9505 29.7096 18.4262 29.9832 18.8856ZM16.1468 21.1307C16.144 21.1307 16.1412 21.1307 16.1384 21.1307C16.0472 21.1275 15.9659 21.0744 15.9302 20.9934C15.4541 19.9152 15.0405 18.8357 14.7016 17.7845C14.6819 17.7246 14.6898 17.6594 14.7227 17.6054C14.7556 17.5509 14.8111 17.5122 14.875 17.4987C15.9795 17.2625 17.1503 17.073 18.3549 16.9353C18.4466 16.9263 18.5335 16.9655 18.5819 17.0388C18.6303 17.1126 18.6299 17.2062 18.5814 17.2796C18.1443 17.9384 17.766 18.5369 17.4248 19.1093C17.0624 19.7172 16.7127 20.3382 16.3569 21.0083C16.316 21.0834 16.2352 21.1307 16.1468 21.1307ZM15.2275 17.8853C15.4987 18.7025 15.815 19.5363 16.1699 20.3715C16.4505 19.8567 16.7292 19.3671 17.0163 18.8856C17.2904 18.4262 17.5874 17.9505 17.9192 17.4411C16.9933 17.559 16.0909 17.708 15.2275 17.8853ZM32.4596 16.6383C32.4422 16.6383 32.4253 16.6365 32.4079 16.6329C30.9095 16.3098 29.2885 16.0718 27.5904 15.9251C27.5213 15.9192 27.4579 15.8841 27.4184 15.8292C26.4159 14.445 25.3678 13.1769 24.3037 12.0596C24.2191 11.9709 24.2224 11.8341 24.3112 11.7491C26.2857 9.85455 28.1572 8.64045 29.7228 8.23905C30.6012 8.01405 31.3387 8.0649 31.9102 8.38395C33.487 9.26595 33.785 12.3642 32.6871 16.4696C32.6598 16.5704 32.5649 16.6383 32.4596 16.6383ZM27.7417 15.4863C29.3365 15.6281 30.864 15.8499 32.2871 16.1465C33.2511 12.4056 33.0151 9.5229 31.6728 8.7723C31.2127 8.51535 30.5961 8.4816 29.8441 8.6733C28.3993 9.0441 26.6589 10.1637 24.8019 11.916C25.8063 12.9848 26.7942 14.1845 27.7417 15.4863ZM14.5404 16.6383C14.4351 16.6383 14.3402 16.5704 14.3129 16.4691C13.215 12.3638 13.5125 9.26595 15.0893 8.38395C15.6609 8.0649 16.3997 8.01405 17.2767 8.23905C18.8428 8.6409 20.7138 9.85455 22.6883 11.7491C22.7767 11.8341 22.78 11.9709 22.6958 12.0596C21.6317 13.1769 20.5836 14.4455 19.5811 15.8292C19.5417 15.8841 19.4787 15.9192 19.4091 15.9251C17.7115 16.0718 16.0904 16.3098 14.5916 16.6329C14.5747 16.6365 14.5578 16.6383 14.5404 16.6383ZM15.3267 8.7723C13.9848 9.5229 13.7489 12.4056 14.7124 16.1465C16.1356 15.8499 17.6631 15.6281 19.2578 15.4863C20.2058 14.1845 21.1932 12.9848 22.1972 11.9156C20.3402 10.1633 18.6002 9.04365 17.155 8.67285C16.4063 8.4816 15.7887 8.5149 15.3267 8.7723ZM25.7861 15.8049C25.7823 15.8049 25.7786 15.8049 25.7748 15.8049C24.221 15.7325 22.7795 15.7325 21.2257 15.8049C21.1288 15.8072 21.0499 15.7626 21.0071 15.6866C20.9643 15.6101 20.9709 15.5169 21.025 15.4467C21.7709 14.477 22.545 13.5657 23.3261 12.7386C23.4154 12.6446 23.5855 12.6446 23.6748 12.7386C24.4555 13.5653 25.2296 14.4765 25.976 15.4467C26.0295 15.5165 26.0366 15.6101 25.9938 15.6866C25.952 15.7595 25.8721 15.8049 25.7861 15.8049ZM23.5 15.3C24.0837 15.3 24.6877 15.3117 25.3015 15.3347C24.7131 14.589 24.1086 13.8821 23.5 13.2269C22.8913 13.8825 22.2869 14.589 21.6985 15.3347C22.3123 15.3117 22.9163 15.3 23.5 15.3Z" fill="#1F212B"/>
                                </svg>
                            )    
                            
                    case 'redux':
                        return (
                            <svg viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.6042 3.75C14.6764 3.75 9.85417 10.5656 9.85417 18.9422C9.85417 23.4741 11.2714 27.5381 13.5074 30.3197C13.4644 30.5194 13.4375 30.7247 13.4375 30.9375C13.4375 32.4909 14.6406 33.75 16.125 33.75C17.6094 33.75 18.8125 32.4909 18.8125 30.9375C18.8125 29.3841 17.6094 28.125 16.125 28.125C15.8428 28.125 15.5768 28.1831 15.3214 28.2675C13.622 25.9978 12.5417 22.6641 12.5417 18.9422C12.5417 12.1163 16.1582 6.5625 20.6042 6.5625C24.0415 6.5625 26.9744 9.88781 28.1328 14.5481C29.1379 14.8725 30.1367 15.2812 31.1159 15.7744C30.0812 8.91375 25.7633 3.75 20.6042 3.75Z" fill="#7E57C2"/>
                            <path d="M31.8084 18.8287C28.2725 16.5862 24.3066 15.6019 20.8953 16.0547C20.4026 15.4163 19.6573 15 18.8125 15C17.3281 15 16.125 16.2591 16.125 17.8125C16.125 19.3659 17.3281 20.625 18.8125 20.625C19.952 20.625 20.9204 19.8797 21.311 18.8325C24.1042 18.4772 27.4134 19.3303 30.4153 21.2353C36.1514 24.8737 39.078 31.1438 36.9388 35.2144C36.1979 36.6244 34.8909 37.6256 33.1602 38.1113C31.1123 38.6841 28.6747 38.4806 26.2381 37.6163C25.4865 38.34 24.6712 39.0206 23.7969 39.6488C26.0831 40.6959 28.4517 41.2463 30.6671 41.2463C31.7779 41.2463 32.8511 41.1084 33.8553 40.8272C36.3108 40.14 38.1921 38.6672 39.2939 36.5691C42.1185 31.1963 38.76 23.2378 31.8084 18.8287Z" fill="#7E57C2"/>
                            <path d="M31.3542 27.18C31.3542 25.6312 30.1511 24.375 28.6667 24.375C27.1823 24.375 25.9792 25.6312 25.9792 27.18C25.9792 27.8072 26.1834 28.3809 26.5167 28.8478C25.3709 31.4747 23.1627 34.0669 20.1903 35.9522C16.7279 38.1497 12.8579 38.9541 9.83894 38.1103C8.10819 37.6247 6.80117 36.6234 6.06032 35.2134C4.53561 32.3128 5.59359 28.2984 8.39844 24.9122C8.10909 23.8397 7.89499 22.7184 7.76599 21.5606C3.22411 26.0578 1.39751 32.1759 3.70607 36.5691C4.80794 38.6672 6.68919 40.14 9.14467 40.8272C10.1489 41.1084 11.2212 41.2462 12.3329 41.2462C15.3304 41.2462 18.61 40.245 21.5833 38.3587C25.0197 36.1791 27.5702 33.1303 28.9372 29.9569C30.2926 29.8134 31.3542 28.6322 31.3542 27.18Z" fill="#7E57C2"/>
                            </svg>
                        )
                    case 'vector':
                        return (
                            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3333 0C12.8076 0 12.381 0.426667 12.381 0.952381C12.381 1.4781 12.8076 1.90476 13.3333 1.90476H16.7485L8.85045 9.80283C8.47854 10.1747 8.47854 10.7776 8.85045 11.1496C9.03664 11.3357 9.28 11.4286 9.52381 11.4286C9.76762 11.4286 10.011 11.3357 10.1972 11.1496L18.0952 3.25149V6.66667C18.0952 7.19238 18.5219 7.61905 19.0476 7.61905C19.5733 7.61905 20 7.19238 20 6.66667V0.952381C20 0.426667 19.5733 0 19.0476 0H13.3333ZM2.85714 0.952381C1.28143 0.952381 0 2.23381 0 3.80952V17.1429C0 18.7186 1.28143 20 2.85714 20H16.1905C17.7662 20 19.0476 18.7186 19.0476 17.1429V11.4286C19.0476 10.9029 18.621 10.4762 18.0952 10.4762C17.5695 10.4762 17.1429 10.9029 17.1429 11.4286V17.1429C17.1429 17.6681 16.7157 18.0952 16.1905 18.0952H2.85714C2.3319 18.0952 1.90476 17.6681 1.90476 17.1429V3.80952C1.90476 3.28429 2.3319 2.85714 2.85714 2.85714H8.57143C9.09714 2.85714 9.52381 2.43048 9.52381 1.90476C9.52381 1.37905 9.09714 0.952381 8.57143 0.952381H2.85714Z"/>
                            </svg>
                        )
                    case 'github_footer':
                        return (
                            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.379 32.2079C13.379 32.3734 13.1935 32.5057 12.9597 32.5057C12.6935 32.5305 12.5081 32.3982 12.5081 32.2079C12.5081 32.0425 12.6935 31.9102 12.9274 31.9102C13.1694 31.8854 13.379 32.0177 13.379 32.2079ZM10.871 31.8357C10.8145 32.0012 10.9758 32.1914 11.2177 32.241C11.4274 32.3237 11.6694 32.241 11.7177 32.0756C11.7661 31.9102 11.6129 31.7199 11.371 31.6455C11.1613 31.5876 10.9274 31.6703 10.871 31.8357ZM14.4355 31.6951C14.2016 31.753 14.0403 31.9102 14.0645 32.1004C14.0887 32.2658 14.2984 32.3734 14.5403 32.3155C14.7742 32.2576 14.9355 32.1004 14.9113 31.935C14.8871 31.7778 14.6694 31.6703 14.4355 31.6951ZM19.7419 0C8.55645 0 0 8.70954 0 20.1817C0 29.3544 5.62903 37.2037 13.6694 39.9663C14.7016 40.1565 15.0645 39.5031 15.0645 38.9655C15.0645 38.4527 15.0403 35.6239 15.0403 33.887C15.0403 33.887 9.39516 35.1277 8.20968 31.4222C8.20968 31.4222 7.29032 29.0153 5.96774 28.3949C5.96774 28.3949 4.12097 27.0964 6.09677 27.1212C6.09677 27.1212 8.10484 27.2866 9.20968 29.2551C10.9758 32.4478 13.9355 31.5297 15.0887 30.9838C15.2742 29.6604 15.7984 28.7423 16.379 28.1964C11.871 27.6836 7.32258 27.0136 7.32258 19.0568C7.32258 16.7822 7.93548 15.6408 9.22581 14.1851C9.01613 13.6474 8.33064 11.4308 9.43548 8.56893C11.121 8.03131 15 10.8021 15 10.8021C16.6129 10.339 18.3468 10.0991 20.0645 10.0991C21.7823 10.0991 23.5161 10.339 25.129 10.8021C25.129 10.8021 29.0081 8.02304 30.6935 8.56893C31.7984 11.439 31.1129 13.6474 30.9032 14.1851C32.1936 15.6491 32.9839 16.7905 32.9839 19.0568C32.9839 27.0385 28.2339 27.6753 23.7258 28.1964C24.4677 28.8498 25.0968 30.0905 25.0968 32.0342C25.0968 34.8216 25.0726 38.2707 25.0726 38.9489C25.0726 39.4866 25.4435 40.14 26.4677 39.9498C34.5323 37.2037 40 29.3544 40 20.1817C40 8.70954 30.9274 0 19.7419 0ZM7.83871 28.5273C7.73387 28.61 7.75806 28.8002 7.89516 28.9574C8.02419 29.0897 8.20968 29.1476 8.31452 29.0401C8.41935 28.9574 8.39516 28.7671 8.25806 28.61C8.12903 28.4776 7.94355 28.4197 7.83871 28.5273ZM6.96774 27.8573C6.91129 27.9648 6.99194 28.0972 7.15323 28.1799C7.28226 28.2626 7.44355 28.2378 7.5 28.122C7.55645 28.0145 7.47581 27.8821 7.31452 27.7994C7.15323 27.7498 7.02419 27.7746 6.96774 27.8573ZM9.58065 30.8018C9.45161 30.9094 9.5 31.1575 9.68548 31.3147C9.87097 31.5049 10.1048 31.5297 10.2097 31.3974C10.3145 31.2898 10.2661 31.0417 10.1048 30.8846C9.92742 30.6943 9.68548 30.6695 9.58065 30.8018ZM8.66129 29.586C8.53226 29.6687 8.53226 29.8837 8.66129 30.074C8.79032 30.2642 9.00806 30.3469 9.1129 30.2642C9.24193 30.1567 9.24193 29.9416 9.1129 29.7514C9 29.5612 8.79032 29.4785 8.66129 29.586Z"/>
                            </svg>
                        ) 
                    case 'linkedIn_footer':
                        return (
                            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M35.2381 0H4.7619C2.13333 0 0 2.13333 0 4.7619V35.2381C0 37.8667 2.13333 40 4.7619 40H35.2381C37.8667 40 40 37.8667 40 35.2381V4.7619C40 2.13333 37.8667 0 35.2381 0ZM12.381 15.2381V33.3333H6.66667V15.2381H12.381ZM6.66667 9.97143C6.66667 8.6381 7.80952 7.61905 9.52381 7.61905C11.2381 7.61905 12.3143 8.6381 12.381 9.97143C12.381 11.3048 11.3143 12.381 9.52381 12.381C7.80952 12.381 6.66667 11.3048 6.66667 9.97143ZM33.3333 33.3333H27.619C27.619 33.3333 27.619 24.5143 27.619 23.8095C27.619 21.9048 26.6667 20 24.2857 19.9619H24.2095C21.9048 19.9619 20.9524 21.9238 20.9524 23.8095C20.9524 24.6762 20.9524 33.3333 20.9524 33.3333H15.2381V15.2381H20.9524V17.6762C20.9524 17.6762 22.7905 15.2381 26.4857 15.2381C30.2667 15.2381 33.3333 17.8381 33.3333 23.1048V33.3333Z"/>
                            </svg>

                        )    
                    case 'telegram_footer':
                        return (
                            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 0C31.0459 0 40 8.95412 40 20C40 31.0459 31.0459 40 20 40C8.95412 40 0 31.0459 0 20C0 8.95412 8.95412 0 20 0ZM26.8988 28.1529C27.2659 27.0247 28.9906 15.7753 29.2024 13.5588C29.2671 12.8871 29.0541 12.4412 28.64 12.2424C28.1376 12.0012 27.3929 12.1212 26.5294 12.4329C25.3447 12.86 10.2047 19.2882 9.32941 19.6612C8.50118 20.0141 7.71529 20.3976 7.71529 20.9553C7.71529 21.3471 7.94824 21.5671 8.58824 21.7953C9.25412 22.0329 10.9318 22.5412 11.9224 22.8141C12.8765 23.0776 13.9624 22.8494 14.5706 22.4706C15.2153 22.0694 22.6624 17.0871 23.1965 16.6506C23.7306 16.2141 24.1565 16.7729 23.72 17.2106C23.2835 17.6471 18.1729 22.6082 17.4976 23.2953C16.6788 24.1294 17.26 24.9929 17.8094 25.34C18.4365 25.7353 22.9447 28.7588 23.6247 29.2447C24.3047 29.7294 24.9918 29.9494 25.6235 29.9494C26.2541 29.9482 26.5847 29.1165 26.8988 28.1529Z"/>
                            </svg>

                        )    
                    case 'instagram_footer':
                        return (
                            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.7545 0.12C13.8873 0.0218181 14.5673 0 20 0C25.4327 0 26.1127 0.0236363 28.2436 0.12C30.3745 0.216364 31.8291 0.556364 33.1018 1.04909C34.4345 1.55273 35.6436 2.34 36.6436 3.35818C37.6618 4.35636 38.4473 5.56364 38.9491 6.89818C39.4436 8.17091 39.7818 9.62545 39.88 11.7527C39.9782 13.8891 40 14.5691 40 20C40 25.4327 39.9764 26.1127 39.88 28.2455C39.7836 30.3727 39.4436 31.8273 38.9491 33.1C38.4473 34.4347 37.6605 35.644 36.6436 36.6436C35.6436 37.6618 34.4345 38.4473 33.1018 38.9491C31.8291 39.4436 30.3745 39.7818 28.2473 39.88C26.1127 39.9782 25.4327 40 20 40C14.5673 40 13.8873 39.9764 11.7545 39.88C9.62727 39.7836 8.17273 39.4436 6.9 38.9491C5.56531 38.4472 4.35604 37.6605 3.35636 36.6436C2.33887 35.6449 1.55148 34.4362 1.04909 33.1018C0.556364 31.8291 0.218182 30.3745 0.12 28.2473C0.0218181 26.1109 0 25.4309 0 20C0 14.5673 0.0236363 13.8873 0.12 11.7564C0.216364 9.62545 0.556364 8.17091 1.04909 6.89818C1.55222 5.56378 2.34022 4.35511 3.35818 3.35636C4.35644 2.33909 5.56449 1.55172 6.89818 1.04909C8.17091 0.556364 9.62545 0.218182 11.7527 0.12H11.7545ZM28.0818 3.72C25.9727 3.62364 25.34 3.60364 20 3.60364C14.66 3.60364 14.0273 3.62364 11.9182 3.72C9.96727 3.80909 8.90909 4.13454 8.20364 4.40909C7.27091 4.77273 6.60364 5.20364 5.90364 5.90364C5.24008 6.54918 4.72942 7.33506 4.40909 8.20364C4.13454 8.90909 3.80909 9.96727 3.72 11.9182C3.62364 14.0273 3.60364 14.66 3.60364 20C3.60364 25.34 3.62364 25.9727 3.72 28.0818C3.80909 30.0327 4.13454 31.0909 4.40909 31.7964C4.72909 32.6636 5.24 33.4509 5.90364 34.0964C6.54909 34.76 7.33636 35.2709 8.20364 35.5909C8.90909 35.8655 9.96727 36.1909 11.9182 36.28C14.0273 36.3764 14.6582 36.3964 20 36.3964C25.3418 36.3964 25.9727 36.3764 28.0818 36.28C30.0327 36.1909 31.0909 35.8655 31.7964 35.5909C32.7291 35.2273 33.3964 34.7964 34.0964 34.0964C34.76 33.4509 35.2709 32.6636 35.5909 31.7964C35.8655 31.0909 36.1909 30.0327 36.28 28.0818C36.3764 25.9727 36.3964 25.34 36.3964 20C36.3964 14.66 36.3764 14.0273 36.28 11.9182C36.1909 9.96727 35.8655 8.90909 35.5909 8.20364C35.2273 7.27091 34.7964 6.60364 34.0964 5.90364C33.4508 5.24013 32.6649 4.72947 31.7964 4.40909C31.0909 4.13454 30.0327 3.80909 28.0818 3.72ZM17.4455 26.1655C18.8721 26.7593 20.4607 26.8395 21.9399 26.3922C23.4191 25.945 24.6971 24.998 25.5557 23.7132C26.4142 22.4283 26.8001 20.8852 26.6474 19.3475C26.4946 17.8097 25.8127 16.3727 24.7182 15.2818C24.0204 14.5845 23.1767 14.0506 22.2479 13.7184C21.319 13.3863 20.3281 13.2643 19.3464 13.3611C18.3647 13.4579 17.4166 13.7712 16.5706 14.2784C15.7245 14.7856 15.0014 15.4741 14.4533 16.2943C13.9052 17.1145 13.5458 18.046 13.4009 19.0217C13.2561 19.9975 13.3294 20.9933 13.6155 21.9373C13.9017 22.8813 14.3936 23.7502 15.0559 24.4813C15.7181 25.2124 16.5342 25.7876 17.4455 26.1655ZM12.7309 12.7309C13.6855 11.7763 14.8188 11.0191 16.066 10.5025C17.3132 9.98585 18.65 9.71995 20 9.71995C21.35 9.71995 22.6868 9.98585 23.934 10.5025C25.1812 11.0191 26.3145 11.7763 27.2691 12.7309C28.2237 13.6855 28.9809 14.8188 29.4975 16.066C30.0141 17.3132 30.28 18.65 30.28 20C30.28 21.35 30.0141 22.6868 29.4975 23.934C28.9809 25.1812 28.2237 26.3145 27.2691 27.2691C25.3412 29.197 22.7264 30.28 20 30.28C17.2736 30.28 14.6588 29.197 12.7309 27.2691C10.803 25.3412 9.71995 22.7264 9.71995 20C9.71995 17.2736 10.803 14.6588 12.7309 12.7309ZM32.56 11.2509C32.7966 11.0278 32.9859 10.7594 33.1169 10.4618C33.2479 10.1641 33.3178 9.84321 33.3226 9.51805C33.3273 9.19289 33.2668 8.87009 33.1445 8.56874C33.0223 8.2674 32.8408 7.99366 32.6108 7.76371C32.3809 7.53376 32.1071 7.35229 31.8058 7.23003C31.5045 7.10778 31.1816 7.04723 30.8565 7.05197C30.5313 7.05671 30.2104 7.12664 29.9128 7.25763C29.6151 7.38862 29.3468 7.57799 29.1236 7.81454C28.6897 8.2746 28.4521 8.88567 28.4613 9.51805C28.4705 10.1504 28.7258 10.7543 29.173 11.2015C29.6202 11.6487 30.2241 11.9041 30.8565 11.9133C31.4889 11.9225 32.0999 11.6849 32.56 11.2509Z"/>
                            </svg>
                        )         
                }
            })()}
        </>
     );
}
 
export default Icon;
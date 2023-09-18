import * as React from "react";

interface LogoProps {
  color?: string
  height?: number,
  width?: number,
}

const LogoGDG = ({ color = '#000', width = 381, height = 100 }: LogoProps) => (
  <svg width={width} height={height} fill={color} xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#a)" fill={color}>
      <path d="M38.445 1.999h3.373c1.147 0 2.146.232 2.998.7a4.86 4.86 0 0 1 1.968 1.941c.459.831.687 1.783.687 2.859 0 1.075-.228 2.027-.687 2.858a4.844 4.844 0 0 1-1.968 1.942c-.855.467-1.854.7-2.998.7h-3.373v-11Zm3.373 9.753c1.322 0 2.372-.374 3.148-1.122.776-.748 1.165-1.793 1.165-3.134s-.389-2.386-1.165-3.134c-.776-.748-1.826-1.122-3.148-1.122h-2.061v8.515h2.061v-.003ZM50.425 12.707a3.768 3.768 0 0 1-1.414-1.484c-.339-.629-.509-1.338-.509-2.128 0-.789.16-1.455.477-2.09a3.824 3.824 0 0 1 1.351-1.521c.583-.38 1.26-.567 2.03-.567.772 0 1.459.172 2.03.513a3.445 3.445 0 0 1 1.32 1.421c.307.604.462 1.295.462 2.074 0 .155-.016.286-.048.4H49.83c.032.593.176 1.096.438 1.506.26.41.59.718.992.921.401.204.82.307 1.256.307 1.02 0 1.807-.472 2.358-1.413l1.125.536A3.982 3.982 0 0 1 54.6 12.69c-.587.368-1.298.552-2.132.552-.76 0-1.443-.18-2.046-.537l.003.003Zm4.34-4.455a2.534 2.534 0 0 0-.28-.983c-.165-.328-.43-.604-.79-.83-.359-.225-.81-.338-1.35-.338-.625 0-1.154.196-1.585.59-.432.395-.716.913-.852 1.558h4.858v.003ZM56.688 5.164h1.422l2.468 6.3h.032l2.5-6.3h1.39l-3.25 7.834h-1.343l-3.218-7.834ZM66.514 6.348h-1.47V5.164h1.47v-.846c0-.493.115-.92.343-1.29.229-.369.535-.652.921-.851.386-.199.813-.3 1.28-.3.467 0 .84.063 1.172.184v1.274a4.94 4.94 0 0 0-.532-.175 2.22 2.22 0 0 0-.593-.07c-.343 0-.64.121-.889.361-.25.24-.375.576-.375 1.006v.707h2.046v1.184H67.84v6.653h-1.327V6.348ZM72.528 12.707a3.768 3.768 0 0 1-1.414-1.484c-.338-.629-.508-1.338-.508-2.128 0-.789.16-1.455.477-2.09a3.824 3.824 0 0 1 1.35-1.521c.583-.38 1.26-.567 2.03-.567.772 0 1.46.172 2.031.513a3.445 3.445 0 0 1 1.32 1.421c.306.604.461 1.295.461 2.074 0 .155-.016.286-.047.4h-6.295c.031.593.175 1.096.438 1.506.26.41.59.718.991.921.401.204.821.307 1.257.307 1.02 0 1.807-.472 2.358-1.413l1.125.536a3.982 3.982 0 0 1-1.398 1.507c-.588.368-1.298.552-2.133.552-.76 0-1.442-.18-2.046-.537l.003.003Zm4.341-4.455a2.534 2.534 0 0 0-.28-.983c-.166-.328-.43-.604-.79-.83-.36-.225-.81-.338-1.35-.338-.625 0-1.155.196-1.585.59-.433.395-.716.913-.853 1.558h4.858v.003ZM80.539 12.652a3.252 3.252 0 0 1-1.22-1.514l1.188-.52c.197.471.494.835.882 1.09.39.256.82.385 1.288.385.5 0 .926-.1 1.28-.3.354-.198.532-.484.532-.85 0-.328-.141-.591-.422-.793-.28-.198-.724-.371-1.327-.513l-.968-.245c-.635-.155-1.157-.415-1.564-.784-.406-.37-.608-.846-.608-1.43 0-.45.139-.845.414-1.191a2.653 2.653 0 0 1 1.102-.792 3.913 3.913 0 0 1 1.485-.276c.697 0 1.319.15 1.867.446.546.297.934.712 1.165 1.244l-1.157.52c-.354-.696-.983-1.044-1.891-1.044-.438 0-.821.1-1.149.3-.328.198-.493.453-.493.76 0 .287.115.521.344.7.228.18.571.324 1.03.438l1.157.291c.782.194 1.37.485 1.765.867.396.384.593.851.593 1.406 0 .482-.141.903-.422 1.266-.28.364-.661.643-1.141.839-.48.193-1.01.291-1.592.291-.855 0-1.569-.196-2.14-.59h.002ZM89.373 13.088a2.046 2.046 0 0 1-.696-.423 1.962 1.962 0 0 1-.469-.688c-.105-.26-.155-.578-.155-.955V6.348h-1.39V5.164h1.39v-2.21h1.328v2.213h1.935V6.35H89.38v4.364c0 .439.084.764.25.973.196.23.485.345.857.345.302 0 .593-.087.874-.26v1.274a2.064 2.064 0 0 1-.478.155c-.162.03-.367.046-.616.046-.323 0-.622-.051-.897-.157l.003-.002ZM98.8 12.493a5.503 5.503 0 0 1-2.086-2.067c-.506-.874-.758-1.852-.758-2.925 0-1.073.252-2.05.758-2.925A5.503 5.503 0 0 1 98.8 2.51c.884-.5 1.871-.753 2.951-.753.834 0 1.595.157 2.287.47a5.33 5.33 0 0 1 1.805 1.328l-.952.905c-.428-.5-.892-.87-1.398-1.107-.506-.234-1.086-.353-1.742-.353-.813 0-1.555.186-2.235.56-.676.374-1.214.9-1.615 1.58-.402.682-.601 1.469-.601 2.359 0 .89.2 1.676.6 2.357a4.212 4.212 0 0 0 1.616 1.582c.677.374 1.422.56 2.235.56 1.354 0 2.505-.547 3.452-1.644l.968.921a5.655 5.655 0 0 1-1.923 1.437c-.76.353-1.592.529-2.499.529-1.084 0-2.067-.25-2.951-.753l.002.005ZM109.001 12.707a3.76 3.76 0 0 1-1.414-1.484c-.338-.629-.509-1.338-.509-2.128 0-.789.16-1.455.477-2.09a3.83 3.83 0 0 1 1.351-1.521c.583-.38 1.259-.567 2.03-.567.772 0 1.459.172 2.031.513a3.45 3.45 0 0 1 1.319 1.421c.307.604.462 1.295.462 2.074 0 .155-.016.286-.048.4h-6.295c.032.593.176 1.096.438 1.506.26.41.591.718.992.921.401.204.821.307 1.256.307 1.021 0 1.807-.472 2.358-1.413l1.126.536a3.99 3.99 0 0 1-1.398 1.507c-.588.368-1.299.552-2.133.552-.761 0-1.443-.18-2.046-.537l.003.003Zm4.341-4.455a2.54 2.54 0 0 0-.281-.983c-.165-.328-.43-.604-.789-.83-.36-.225-.811-.338-1.351-.338-.625 0-1.154.196-1.585.59-.432.395-.716.913-.852 1.558h4.858v.003ZM116.293 5.164h1.264v1.259h.063c.157-.43.459-.79.905-1.076a2.57 2.57 0 0 1 1.406-.43c.364 0 .676.056.936.17v1.398a2.532 2.532 0 0 0-1.125-.245c-.386 0-.74.108-1.062.322-.323.217-.58.506-.774.87a2.462 2.462 0 0 0-.289 1.178v4.388h-1.327V5.164h.003ZM122.152 5.164h1.264v1.259h.063c.158-.43.459-.79.905-1.076.449-.286.916-.43 1.406-.43.365 0 .677.056.936.17v1.398a2.532 2.532 0 0 0-1.125-.245c-.385 0-.739.108-1.062.322-.323.217-.58.506-.774.87a2.462 2.462 0 0 0-.288 1.178v4.388h-1.328V5.164h.003ZM128.681 12.905a2.542 2.542 0 0 1-1.063-.928 2.463 2.463 0 0 1-.375-1.344c0-.83.318-1.478.952-1.943.635-.467 1.438-.699 2.406-.699.48 0 .923.052 1.335.155.411.103.726.22.944.353v-.477c0-.583-.207-1.052-.624-1.406-.417-.353-.942-.528-1.577-.528-.448 0-.86.095-1.235.283-.375.191-.672.454-.889.792l-1-.737a3.193 3.193 0 0 1 1.288-1.107 4.11 4.11 0 0 1 1.821-.4c1.083 0 1.933.279 2.554.838.619.558.929 1.319.929 2.28v4.961h-1.264v-1.122h-.063c-.229.38-.572.702-1.031.967-.459.266-.973.4-1.548.4a3.541 3.541 0 0 1-1.563-.338h.003Zm2.937-1.153c.386-.224.693-.526.921-.905.228-.38.344-.795.344-1.243a3.373 3.373 0 0 0-.921-.4 4.23 4.23 0 0 0-1.157-.155c-.729 0-1.277.15-1.647.446-.37.297-.554.681-.554 1.153 0 .431.166.78.501 1.045.334.266.756.4 1.265.4.448 0 .863-.114 1.248-.338v-.003ZM137.357 12.707a3.804 3.804 0 0 1-1.367-1.484c-.333-.629-.501-1.344-.501-2.143 0-.8.166-1.501.501-2.136a3.79 3.79 0 0 1 1.367-1.491 3.577 3.577 0 0 1 1.928-.537c.613 0 1.162.137 1.639.408.48.27.845.606 1.094 1.006h.063l-.063-1.091v-3.24h1.327v11h-1.264v-1.154h-.063c-.249.39-.614.72-1.094.99-.48.271-1.026.408-1.639.408-.709 0-1.351-.18-1.928-.536Zm3.389-1.014c.401-.245.724-.593.968-1.045.243-.451.367-.972.367-1.566 0-.593-.124-1.117-.367-1.565-.244-.452-.57-.8-.968-1.045a2.462 2.462 0 0 0-1.304-.369c-.467 0-.889.124-1.296.369a2.66 2.66 0 0 0-.975 1.052 3.252 3.252 0 0 0-.368 1.558c0 .583.124 1.104.368 1.558.244.457.569.808.975 1.053a2.476 2.476 0 0 0 2.6 0ZM146.8 12.691a3.893 3.893 0 0 1-1.461-1.506 4.296 4.296 0 0 1-.525-2.105c0-.769.176-1.47.525-2.105a3.91 3.91 0 0 1 1.461-1.506c.624-.37 1.327-.553 2.109-.553s1.485.184 2.109.553c.624.368 1.112.869 1.461 1.506.349.635.524 1.336.524 2.105 0 .769-.175 1.47-.524 2.105a3.91 3.91 0 0 1-1.461 1.506c-.624.37-1.327.552-2.109.552s-1.485-.183-2.109-.552Zm3.475-.99a2.67 2.67 0 0 0 1.016-1.037c.254-.452.383-.978.383-1.582 0-.603-.129-1.132-.383-1.58a2.67 2.67 0 0 0-1.016-1.038 2.721 2.721 0 0 0-1.366-.36 2.77 2.77 0 0 0-1.375.36c-.427.24-.768.586-1.022 1.037-.255.452-.383.978-.383 1.581 0 .604.128 1.133.383 1.582.254.451.595.797 1.022 1.037.428.24.884.36 1.375.36.49 0 .944-.12 1.366-.36ZM12.622 10.367l-8.86-5.03c-1.215-.673-2.755-.25-3.437.944a2.46 2.46 0 0 0 .913 3.354l8.86 5.03c1.225.652 2.757.2 3.42-1.004a2.457 2.457 0 0 0-.896-3.291v-.003ZM30.29 5.337 21.43.304c-1.223-.657-2.755-.216-3.426.983a2.457 2.457 0 0 0 .902 3.312l8.86 5.033c1.207.686 2.75.279 3.447-.908a2.459 2.459 0 0 0-.923-3.39v.003ZM27.416 10.23l-4.134-2.347-4.375 2.487a2.459 2.459 0 0 0-.924 3.39c.698 1.186 2.24 1.593 3.447.907l7.121-4.044a3.279 3.279 0 0 1-1.135-.393ZM4.113 4.739 8.25 7.086l4.375-2.487a2.458 2.458 0 0 0 .823-3.415 2.55 2.55 0 0 0-3.347-.882L2.978 4.349c.398.06.784.191 1.135.39Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h153v15H0z" />
      </clipPath>
    </defs>
  </svg >
);

export default LogoGDG;
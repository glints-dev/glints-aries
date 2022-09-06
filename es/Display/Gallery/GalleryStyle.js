import styled from 'styled-components';
import { Greyscale } from '../../Utils/Colors';
export var GalleryContainer = styled.div.withConfig({
  displayName: "GalleryStyle__GalleryContainer",
  componentId: "sc-mrr504-0"
})(["position:relative;.modal-content{width:95vw;.modal-header{border-bottom:none;}}"]);
export var GalleryItemWrapper = styled.div.withConfig({
  displayName: "GalleryStyle__GalleryItemWrapper",
  componentId: "sc-mrr504-1"
})(["display:flex;flex-wrap:wrap;img{height:5em;width:5em;object-fit:cover;cursor:pointer;}"]);
export var GalleryItem = styled.div.withConfig({
  displayName: "GalleryStyle__GalleryItem",
  componentId: "sc-mrr504-2"
})(["position:relative;margin:5px;", ""], function (_ref) {
  var imageLeft = _ref.imageLeft;

  if (imageLeft !== 0) {
    return "\n        &:last-child:after {\n          content: '+" + imageLeft + "';\n          position: absolute;\n          top: 0;\n          left: 0;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          color: #0869C2;\n          height: 100%;\n          width: 100%;\n          font-size: 18px;\n          background: rgba(255, 255, 255, 0.75);\n          cursor: pointer;\n        }\n      ";
  }
});
export var GalleryImageWrapper = styled.div.withConfig({
  displayName: "GalleryStyle__GalleryImageWrapper",
  componentId: "sc-mrr504-3"
})(["position:relative;display:flex;justify-content:center;align-items:center;img{height:50vh;width:100%;object-fit:contain;}"]);
export var GalleryThumbnailWrapper = styled.div.withConfig({
  displayName: "GalleryStyle__GalleryThumbnailWrapper",
  componentId: "sc-mrr504-4"
})(["position:relative;display:flex;align-items:center;justify-content:center;img{height:4em;width:4em;object-fit:cover;cursor:pointer;margin:0.3em;&.active{border:1px solid ", ";}}"], Greyscale.white);
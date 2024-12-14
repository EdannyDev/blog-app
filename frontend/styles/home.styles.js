import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
  margin: 80px auto 0;
  padding: 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`;

export const Card = styled.div`
  background-color: #f0e6d2;
  color: #000;
  padding: 40px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const PostCard = styled.div`
  background-color: #f0e6d2;
  color: #000;
  padding: 20px;
  padding-bottom: 80px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #bda692;
  border-radius: 5px;
  background-color: #e0d6bf;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  &:focus {
    outline: none;
    border-color: #c1a27b;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #bda692;
  border-radius: 5px;
  background-color: #e0d6bf;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  &:focus {
    outline: none;
    border-color: #c1a27b;
  }
`;

export const SubmitButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #703f07;
  transition: color 0.3s ease;
  float: left;
  &:hover {
    color: #9d6b40;
  }
`;

export const UploadButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #703f07;
  transition: color 0.3s ease;
  float: right;
  &:hover {
    color: #9d6b40;
  }
`;

export const ImagePreview = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
  border-radius: 5px;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 20px 0;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #f5f5dc;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  color: #000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #703f07;
  transition: color 0.3s ease;
  &:hover {
    color: #9d6b40;
  }
`;

export const AddCommentButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #703f07;
  transition: color 0.3s ease;
  &:hover {
    color: #9d6b40;
  }
`;

export const ViewCommentsButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #703f07;
  transition: color 0.3s ease;
  &:hover {
    color: #9d6b40;
  }
`;

export const ModalSubmitButton = styled.button`
  background-color: #703f07;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    background-color: #9d6b40;
  }
`;

export const CancelButton = styled.button`
  background-color: #8b0000; /* Rojo vino */
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #fff;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    background-color: #b30000; /* Tono más claro de rojo vino */
  }
`;

export const DeletePostButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 80px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #703f07;
  transition: color 0.3s ease;
  &:hover {
    color: #9d6b40;
  }
`;

export const CommentInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const CommentCount = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
`;

export const CommentText = styled.span`
  font-size: 16px;
`;

export const DeleteConfirmationIcon = styled.div`
  font-size: 48px;
  color: #FFA500;
  margin-bottom: 20px;
  animation: bounce 1s infinite alternate;
  
  @keyframes bounce {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
    }
  }
`;
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <p className="text-6xl mb-4">🔍</p>
      <h1 className="text-3xl font-bold text-gray-800">404</h1>
      <p className="text-gray-500 mt-2 mb-6">The page you're looking for doesn't exist.</p>
      <Button variant="primary" onClick={() => navigate('/login')}>
        Go to Login
      </Button>
    </div>
  );
}

export default NotFoundPage;

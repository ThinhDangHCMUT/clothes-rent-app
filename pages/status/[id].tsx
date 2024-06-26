import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { shootFireworks } from '../../lib/utils';

const Id = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id === 'success') {
      shootFireworks();
    }
  }, [id]);

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6 text-center">
      {id === 'error' ? (
        <div className="p-2 rounded-md bg-rose-100 text-rose-500 max-w-md mx-auto">
          <p className="text-lg">Sorry, something went wrong!</p>
        </div>
      ) : id === 'timeout' ? (
        <div className="p-2 rounded-md bg-gray-100 text-gray-500 max-w-md mx-auto">
          Timeout ...
        </div>
      ) : (
        <div className="py-4 px-8 rounded-md bg-gray-100 max-w-lg mx-auto">
          <h2 className="text-4xl font-semibold flex flex-col items-center space-x-1">
            <span>Thanks for your order!</span>
          </h2>
          <p className="text-lg mt-3">Check your inbox for the receipt.</p>
        </div>
      )}
    </div>
  );
};

export default Id;

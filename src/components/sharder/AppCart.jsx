import Image from "next/image";
import Link from "next/link";
import { Star, Download, HardDrive } from "lucide-react";

const AppCard = ({ app }) => {
  const {image,title,companyName,id,description,size,reviews,ratingAvg,downloads,ratings,} = app;
  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative m-3 overflow-hidden rounded-2xl bg-gray-100">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-56"
        />

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold shadow-md backdrop-blur">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {ratingAvg}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5">
        {/* Title */}
        <div className="mb-4">
          <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="mt-1 text-sm text-gray-500">{companyName}</p>
        </div>

        {/* Description */}
        <p className="mb-5 line-clamp-2 text-sm leading-6 text-gray-600">
          {description}
        </p>

        {/* Stats */}
        <div className="mb-5 grid grid-cols-3 gap-2 rounded-2xl bg-gray-50 p-3">
          {/* Downloads */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-900">
              <Download className="h-4 w-4" />
              <span className="text-sm font-bold">{downloads}</span>
            </div>

            <p className="mt-1 text-xs text-gray-500">Downloads</p>
          </div>

          {/* Reviews */}
          <div className="border-x border-gray-200 text-center">
            <div className="flex items-center justify-center gap-1 text-gray-900">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

              <span className="text-sm font-bold">{reviews}</span>
            </div>

            <p className="mt-1 text-xs text-gray-500">Reviews</p>
          </div>

          {/* Size */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-900">
              <HardDrive className="h-4 w-4" />

              <span className="text-sm font-bold">{size} MB</span>
            </div>

            <p className="mt-1 text-xs text-gray-500">Size</p>
          </div>
        </div>

        {/* Button */}
        <Link
          href={`/apps/${id}`}
          className="flex w-full items-center justify-center rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-600 active:scale-[0.98]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default AppCard;

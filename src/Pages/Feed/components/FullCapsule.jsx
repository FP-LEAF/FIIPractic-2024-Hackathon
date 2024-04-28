import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "flowbite-react";
import FeedCapsuleCard from "./FeedCapsuleCard";
import CommentSection from "./CommentSection";

function FullCapsule(props) {
    const {
        imageSrc,
        authorName,
        authorEmail,
        contentText,
        category,
        date,
        title,
        authorAvatarUrl,
        authorRole,
        capsuleText,
        description
    } = props;

    return (
        <Card className="max-w-lg">
            <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <a href='Capsule2'>
                        <img
                            alt="Author image"
                            src={imageSrc}
                            className="rounded-full"
                            width="32"
                            height="32"
                        />
                    </a>
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {authorName}
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {authorEmail}
                    </p>
                </div>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {contentText}
            </p>

            <FeedCapsuleCard
                category={category}
                date={date}
                title={title}
                imageUrl={imageSrc}
                altText="Meaningful alt text for an image that is not purely decorative"
                authorAvatarUrl={authorAvatarUrl}
                authorName={authorName}
                authorRole={authorRole}
                capsuleText={capsuleText}
                description={description}
            />
            <Button>
                <a href='/Capsule2'>Read more</a>
                <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Button>
            <CommentSection />
        </Card>
    );
}

FullCapsule.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    authorEmail: PropTypes.string.isRequired,
    contentText: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorAvatarUrl: PropTypes.string.isRequired,
    authorRole: PropTypes.string.isRequired,
    capsuleText: PropTypes.string.isRequired,
    description: PropTypes.string // assuming it's not required
};

export default FullCapsule;
